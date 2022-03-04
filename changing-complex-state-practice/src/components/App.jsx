import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
function inputHandler(event){
  const{name,value}=event.target;

  setContact((prevValue)=>{

    if(name==="fName"){
      return{
        fName:value,
        lName:prevValue.lName,
        email:prevValue.email
      };
     
    }
    else if(name==="lName"){
      return{
        lName:value,
        fName:prevValue.fName,
        email:prevValue.email

      };
    }
    else if(name==="email"){
      return{
        lName:prevValue.lName,
        fName:prevValue.fName,
        email:value
      };
    }

  });
}
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={inputHandler} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={inputHandler} value={contact.lName}  />
        <input name="email" placeholder="Email" onChange={inputHandler} value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
