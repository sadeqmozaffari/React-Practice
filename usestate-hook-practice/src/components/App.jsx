import React,{useState} from "react";

function App() {
  const[time,setTime]=useState(new Date().toLocaleTimeString());
  function timeChange(){
    var newTime = new Date().toLocaleTimeString();
     setTime(newTime);
    //console.log(time);
  }
  setInterval(timeChange, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timeChange}>Get Time</button>
    </div>
  );
}

export default App;
