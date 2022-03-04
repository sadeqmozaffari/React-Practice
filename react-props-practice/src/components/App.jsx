import React from "react";
import Card from "./card";
import contacts from '../contacts'
import Avatar from "./Avatar";
function MapData(contact){
  return <Card key={contact.id}
      id={contact.id}
       name={contact.name}
       phone={contact.phone}
       email={contact.email}
       imgURL={contact.imgURL}
     />
}
function App() {
  return (
    <div>
   <h1 className="heading">My Contacts</h1>
   <Avatar image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"/>
     <Card
     id={contacts[0].id}
       name={contacts[0].name}
       phone={contacts[0].phone}
       email={contacts[0].email}
       imgURL={contacts[0].imgURL}
     />
       {contacts.map(MapData)}

    </div>
  );
}

export default App;
