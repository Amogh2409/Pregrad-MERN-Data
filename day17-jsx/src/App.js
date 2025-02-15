// import MyComponent from './MyComponent';
import './App.css';
import React from 'react';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      <header style={{textAlign: "center", marginTop: "20px"}}>
        <h1>
          My Movie Website
        </h1>
      </header>
      <MovieList />
    </div>
  );
}

export default App;
