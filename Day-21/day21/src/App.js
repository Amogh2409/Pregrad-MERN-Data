// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Home from "./components/Home";
// import Dashboard from "./components/DashBoard";
// import Login from "./components/Login";
// import ProtectedRoute from "./components/ProtectedRoutes";


// export default function App(){
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/login" element={<Login />}/>

//             {/* Protected Path (Onlt accessible if you logged in) */}

//             <Route element={<ProtectedRoute />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Route>

//         </Routes>
//       </Router>
//     </AuthProvider>
//   )
// }




import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post("http://localhost:5000/tasks", { title: newTask }).then((res) => {
      setTasks([...tasks, res.data]);
      setNewTask("");
    });
  };

  const toggleTask = (id, completed) => {
    axios.put(`http://localhost:5000/tasks/${id}`, { completed: !completed }).then((res) => {
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
    });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded-md mr-2"
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
      </div>
      <ul className="w-96">
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center bg-white shadow p-2 my-2 rounded-md">
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)} className="text-red-500">
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

