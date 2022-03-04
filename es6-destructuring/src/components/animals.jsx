import React from "react";
import animals from "../data";
const[cat,dog]=animals;
const{name,sound}=cat;
function ShowAnimals(){
return <table>
<tr>
  <th>name</th>
  <th>sound</th>
</tr>
<tr>
        <td>{name}</td>
        <td>{sound}</td>
</tr>
</table>
}
export default ShowAnimals;