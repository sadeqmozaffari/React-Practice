import React,{useState} from "react";


function App() {
  const[nameTyped,setTypedName]=useState("");
  var name="";
 function handlerChange(event){
    name = event.target.value;
   // console.log(name);
  }
  function handlerClick(event){
    setTypedName(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {nameTyped} </h1>
      <form onClick={handlerClick}>
      <input type="text" placeholder="What's your name?" onChange={handlerChange} />
      <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
