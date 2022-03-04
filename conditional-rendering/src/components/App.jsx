import React from "react";
import Login from "./Login";
import Home from "./Home";
var isLoggin=false;
var isRegister=true;
// function Check(){
// if(isLoggin===true){
//  return <Home/>
// }else{
// return <Login />
// }
// }
function App() {
  return (
    <div className="container">
      {isLoggin? <Home />: <Login isRegister={isRegister}/>}
    </div>
  );
}

export default App;
