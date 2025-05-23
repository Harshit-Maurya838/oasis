const express = require("express");
const User = require("../../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware.js');
const sendForgotPasswordMail  = require("../../lib/mailgen.js");

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};


router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists", success: false });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log({
            username: name,
            email: email,
            password: hashedPassword,
        })

        const newUser = new User({
            username: name,
            email: email,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", success: true });

    } catch (err) {
        console.error("Error registering user: ", err);
        res.status(500).json({ message: "Error registering user", error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user._id);

        res.cookie('token',token,{
            httpOnly:true,
            secure: true,
            sameSite: "none"
        })
        res.status(200).json({ message: "Login successful",isAuth:true, user: { name: user.username, email: user.email, userId: user._id } });

    } catch (err) {
        console.error("Error logging in user: ", err);
        res.status(500).json({ message: "Error logging in user", isAuth:false, error: err.message });
    }
});


router.post('/user',authMiddleware,async(req,res)=>{
    try{
        if(req.user){
            console.log(req.user)
            const user = await User.findById(req.user.userId);
            res.status(200).json({message:"User data fetched successfully",suc:true,isAuth:true,user:{
                username:user.username,
                email:user.email,
                userId:req.user.userId
            }});
            return '';
        }

        res.status(400).json({message:"The authentication failed ",suc:false , isAuth:false});
    }
    catch(err){
        console.log('Error in fetching user data',err);
        res.status(500).json({message:"Failed to fetch user data.",suc:false,isAuth:false,error:err.message});
    }
})

router.post('/logout',(req,res)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            res.status(400).json({message:'Bad request, no tokens provided',suc:false});
           return 
        }

        res.clearCookie('token',{httpOnly:true,sameSite:"none",secure:true});
        res.status(200).json({message:'User logout successfully',isAuth:false,suc:true});

    }
    catch(err){
        console.error('Error in performing logout operation: ',err)
        res.status(500).json({message:"Error in logging out user",isAuth:false,error:err.message});
    }
})

router.post("/forgetpassword",async (req,res)=>{
    try{
        const {email} = req.body;

        const userData = await User.findOne({email})
        if(!userData){
            res.status(400).json({message:"User with this email does not exist",suc:false});
            return '';
        }


        sendForgotPasswordMail(email,userData._id);
        res.status(200).json({message:"Mails sent successfully",suc:true});
    }
    catch(err){
        console.error("Error in forget password route: ",err);
        res.status(500).json({message:"Error in forget password route",suc:false,error:err.message});
    }
})

router.post("/resetpassword",async (req,res)=>{
    const{userId,newPassword} = req.body;
    
    try{
        const user = await User.findById(userId);
        if(!user){
            res.status(400).json({message:"User does not exist",suc:false});
            return '';
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({message:"Password reset successfully",suc:true});
    }
    catch(err){
        console.error("Error in reset password route: ",err);
        res.status(500).json({message:"Error in reset password route",suc:false,error:err.message});
    }

})

module.exports = router;