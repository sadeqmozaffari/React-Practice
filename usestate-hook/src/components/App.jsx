import React,{useState} from "react";

function App() {
const[count,setCount]=useState(10);

function increase(){
  setCount(count+1);
}
function decrease(){
  setCount(count-1);
}
  return <div>
 <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>;
}

export default App;