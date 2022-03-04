import React,{useState} from "react";
import { IndexKind } from "typescript";
import TodoItem from "./TodoItem";
function App() {
const[title,addItem]=useState("");
const[items,updateItem]=useState([]);

function inputHandler(event){
  const{value}=event.target;
  addItem(value);
}
function addToList(){
  updateItem((prevValue)=>{
    return [...prevValue,title]
  });
  addItem(" ");
}
function deleteItem(id){
  //console.log(id)
  updateItem((prevValue)=>{
    return prevValue.filter((item,index)=>{
      return index !== id;
    })

  });

}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input type="text"  onChange={inputHandler} value={title}/>
        <button type="submit" onClick={addToList}>
          <span>Add</span>
        </button>
     
      </div>
      <div>
      <ul>
      {items.map((todo,index)=>
        <TodoItem key={index} id={index} title={todo} onChecked={deleteItem}/>
      )}
      </ul>
      </div>
    </div>
  );
}

export default App;
