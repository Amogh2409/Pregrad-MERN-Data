const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);


mongoose.connect('mongodb://127.0.0.1:27017/express-app').then(()=> console.log("MongoDb connected")).catch((err)=> console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));