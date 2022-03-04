import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[noteList,setNotes]=useState([{title:"",content:""}]);
  function addNote(newNote){
    setNotes((preValue)=>{
      return [...preValue, newNote]
    });
  }
  function deleteNote(id){
    setNotes(prevItems=>{
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
     {
       noteList.map((note,index)=>{
       return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
       })
     }
      <Footer />
    </div>
  );
}

export default App;
