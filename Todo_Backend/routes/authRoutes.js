const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();



const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, username: user.username, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
}





// Signup Route
router.post("/signup", async (req, res) => {
    try {

        console.log("📌 Signup request received:", req.body);
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const user = new User({ username, email, password: hashedPassword });
        await user.save();


        res.status(201).json({ token: generateToken(user), user: { id: user._id, username, email }, msg: "User registered successfully" });
    } catch (error) {
        console.error("❌ Signup error:", error.message);
        res.status(500).json({ error: error.message });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Password" });
        }

        res.json({ token: generateToken(user), user: { id: user._id, username: user.username, email }, msg: "User login successful", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;



// login - 5 tasks assign
// tab close - chale gye
// token - verify - success - data call and present