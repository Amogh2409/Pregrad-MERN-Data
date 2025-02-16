
import { useState } from 'react' 
import './App.css' 
function App() { let [count, setCount] = useState(12) 
  let addval = () => { 
    setCount(++count) 
    console.log(count); 
  } 
  let remVal = () => {
     if (count > 0) { 
      setCount(--count) 
    } 
  } 
  return (<> 
  <p>Counter {count}</p> 
  <button onClick={addval}>Add Value</button> 
  <button onClick={remVal}>Remove Value</button> </>) } 
  
  export default App;