require("dotenv").config();

const express = require('express');
const connectDB = require('./db/db');
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require('./routes/todoRoutes');
const authmiddleware = require('./middleware/authMiddleware');

const app = express(); // this creates an express application
app.use(express.json()); // this allows us to parse JSON in the request body


const allowedOrigins = ["http://localhost:3000" , "*"];


// app.use(cors({
//     origin: (origin, callback) => {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         }
//         else {
//             callback(new Error("Cors not allowed"));
//         }
//     }, credentials: true
// }));

app.use(cors({origin: '*', credentials: true} ));

connectDB();


app.use("/auth", authRoutes);
app.use('/todos', authmiddleware, todoRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route Not Found" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

