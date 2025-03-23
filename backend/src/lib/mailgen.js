const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendForgotPasswordMail = (email , userId)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail's SMTP service
        auth: {
            user: process.env.APP_MAIL, // Your Gmail address
            pass: process.env.APP_PASSWORD   // Your Gmail password or app-specific password
        }
    });
    
    console.log(email)
    // Email options
    let mailOptions = {
        from: process.env.APP_MAIL, // Sender address (your Gmail address)
        to: email, // Recipient address (Yahoo user)
        subject: 'Reset password for you Oasis account', // Subject line
        text: 'Click on this link to reset you password', // Plain text body
        html: `<a href="http://localhost:5173/auth/resetpassword/${userId}">Reset your password over here</a>` // HTML body
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred: ', error);
        }
        console.log('Email sent: ', info.messageId);
        console.log('Preview URL: ', nodemailer.getTestMessageUrl(info));
    });

}


module.exports = sendForgotPasswordMail;