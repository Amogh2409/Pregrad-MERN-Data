import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Dashboard from "./component/dashboard";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}







// import './App.css';
// // import { ThemeProvider } from './component/ThemeContext';
// // import ThemeToggle from './component/ThemeToggle';

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './component/Home';
// // import About from './component/About';
// import UserProfile from './component/UserProfiles';


// function App() {
//   return (

// <Router>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/user/:id' element={<UserProfile />} />


//     </Routes>
// </Router>
//   );
// }

// export default App;






    // <ThemeProvider>
    //   <div>
    //     <h1>
    //       Context Api Example
    //     </h1>

    //     <ThemeToggle />
    //   </div>
    // </ThemeProvider>



      /* <nav>
        <Link to="/">
        
            <h4 style={{margin: 5}}>Home</h4>
        </Link>
        <Link to="/about">About</Link>
      </nav> */

  /* <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>
      </nav>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router> */
    // <a> reloads the entire page
    // Link  changes the url without relaoding the page