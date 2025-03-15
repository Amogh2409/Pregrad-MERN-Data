const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


const router = express.Router();
const SECRET_KEY = "12345678";  // sign JWt token   rea world app env

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save(); // this ```xml
// saves the user to the database
        res.status(201).json({ message: "User registered successfully" })
    }
    catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }

})


router.post("/login", async (req, res) => {
    try {
        const {
            email, password
        } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ error: "invalid credentails" });


        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });  // auth token stores user id token will expire in one hour

        res.json({ message: "Login Sucessful", token: token })
    }
    catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }

})

module.exports = router