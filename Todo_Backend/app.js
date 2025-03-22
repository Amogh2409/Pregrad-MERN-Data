const express = require('express');
const connectDB = require('./db/db');
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const app = express(); // this creates an express application
app.use(express.json()); // this allows us to parse JSON in the request body
app.use(cors({origin: "*", credentials: true}));
connectDB();


app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

