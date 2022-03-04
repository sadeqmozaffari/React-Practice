import React, { useState } from "react";

function CreateArea(props) {
  const[note,setNote]=useState({
    title:"",
    content:""
  });

  function inputHandler(event){
  const{value,name}=event.target;
    setNote(preValue=>
      ({
        ...preValue,
        [name]:value
      }));
  }
  function submitNote(event){
    props.addNote(note)
    event.preventDefault();
    setNote({
      title:"",
      content:""
    });
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={inputHandler} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={inputHandler} value={note.content} />
        <button onClick={submitNote}  >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
