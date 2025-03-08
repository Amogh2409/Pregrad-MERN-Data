const http = require("http");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT || 5000;



const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "appplication/json");

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome to the Node.js HTTP Server!" }));
      } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "This is a professional Node.js server." }));
      } else if (req.url === "/time" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ time: new Date().toISOString() }));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route Not Found" }));
      }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });