// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors()) // This allows all origins to access this server
// app.use(express.json()); // This parses incoming requests with JSON payloads

// // test target

// app.get("/", (req, res) =>{
//     res.json({message: "Backend is running at 5000 for the first time"});
//     res.json({data: "This is the test api and i am just running it"})
// });

// // start server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "keshav",
    data: "keshav"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
