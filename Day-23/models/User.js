const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username : {type : String, required: true, unique : true},
    email : {type : String, required: true, unique : true},
    password : {type : String, required: true},
})


module.exports = mongoose.model("User", UserSchema);




// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js Server!");
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Express.js!");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



// React -> Node -> Express - > Next js -> typescript