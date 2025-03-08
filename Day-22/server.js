// npm init -y 
// npm install express mongoose dotenv cors body-parser

const express = require("express");   // Import Express.js framework for handling HTTP requests
const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB
const dotenv = require("dotenv");     // Import dotenv to use environment variables from a .env file
const cors = require("cors");         // Import CORS middleware to allow cross-origin requests

dotenv.config(); // Loads environment variables from .env file

const app = express();
app.use(cors());        // Enables CORS to allow frontend requests
app.use(express.json()); // Parses incoming JSON requests


const PORT = process.env.PORT || 5000; // Set port from .env or default to 5000

mongoose
  .connect('mongodb://127.0.0.1:27017/todolist')
  .then(() => console.log("MongoDB Connected")) // Log success message
  .catch((err) => console.log(err)); // Log errors if connection fails


const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
  });
  const Task = mongoose.model("Task", TaskSchema);
  

  app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();  // Recieve all the data from monogodb
    res.json(tasks); //sedn task as a json response
  });

  app.post("/tasks", async (req, res) => {
    const newTask = new Task({title: req.body.title, completed: false});
    await newTask.save();
    res.json(newTask);
  })



  app.put("/tasks/:id", async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  });
  
  app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id); // Delete the task by ID
    res.json({ message: "Task deleted" }); // Send confirmation response
  });
  

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//   data - packet (get), (post)



// Method	Route	    Description
// GET	    /tasks	    Fetch all tasks from MongoDB.
// POST	/tasks	    Add a new task to MongoDB.
// PUT	    /tasks/:id	Update an existing task.
// DELETE	/tasks/:id	Delete a task by ID. 