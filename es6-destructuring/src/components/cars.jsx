import React from "react";
import cars from "../practice";
// console.log(cars);
const[Honda,Tesla]=cars;
// console.log(Honda);
const{speedStats:{topSpeed:HondaSpeed,zeroToSixty:HondaZero}}=Honda;
const{speedStats:{topSpeed:TeslaSpeed,zeroToSixty:TeslaZero}}=Tesla;
const{coloursByPopularity:[honaTopColor]}=Honda;
const{coloursByPopularity:[teslaTopColor]}=Tesla;
function ShowCars(){
return <table>
<thead>
<tr>
  <th>Model</th>
  <th>Color</th>
  <th>Top Speed</th>
</tr>
</thead>
<tbody>
<tr>
    <td>{Honda.model}</td>
    <td>{honaTopColor}</td>
    <td>{HondaSpeed}</td>
</tr>
<tr>
    <td>{Tesla.model}</td>
    <td>{teslaTopColor}</td>
    <td>{TeslaSpeed}</td>
</tr>
</tbody>
</table>
}
export default ShowCars;