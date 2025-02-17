const express = require("express");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const router = require("../orders/orders");

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};


router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists", success: false });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();

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

        res.status(200).json({ message: "Login successful", token, user: { name: user.name, email: user.email } });

    } catch (err) {
        console.error("Error logging in user: ", err);
        res.status(500).json({ message: "Error logging in user", error: err.message });
    }
});


module.exports = router;