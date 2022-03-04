import React,{useState} from "react";

function App() {
  const[fullName,setFullName]=useState(
    {
    fName:"",
    lName:""
  }
  );

function inputHandler(event){
  const{name,value}=event.target;

setFullName((prevValue)=>{

  console.log(prevValue);
  if(name==="fName"){
    return{
      fName:value,
      lName:prevValue.lName
    };
  }else if(name==="lName"){
    return{
    lName:value,
    fName:prevValue.fName
    };
}
});
 
}
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={inputHandler}  />
        <input name="lName" placeholder="Last Name" onChange={inputHandler}  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
