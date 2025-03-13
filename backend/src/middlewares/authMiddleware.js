const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = (req, res, next) => {
    // const token = req.header("Authorization")?.split(" ")[1];
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No Token Provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Contains userId
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
