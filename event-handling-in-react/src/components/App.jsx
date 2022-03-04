import React,{useState} from "react";

function App() {
 const[mesageText,setMessage]=useState("Hello");
  const[isHover,setButtonColor]=useState(false);
  function changeColorBlack(){
   // console.log("ok")
    setButtonColor(true);
  }
  function ChangeText(){
    setMessage("Submitted");
  }
  function changeColorWhite(){
    //console.log("No")
    setButtonColor(false);
   
  }
  return (
    <div className="container">
      <h1>{mesageText}</h1> 
      <input type="text" placeholder="What's your name?" />
      <button onClick={ChangeText} onMouseOver={changeColorBlack} onMouseOut={changeColorWhite} style={{backgroundColor:isHover?"Black":"White"}}>Submit</button>
    </div>
  );
}

export default App;
