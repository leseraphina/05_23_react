import { useState } from 'react';
import {BiSearch,BiCheckSquare,BiDownArrow} from 'react-icons/bi'

function DropDown({toggle}){
  console.log(toggle)
  if(toggle){
    return null
  }
  return (
    <ul>
      <li>애기이름 <BiCheckSquare /></li>
      <li>예약자명  <BiCheckSquare /></li>
      <li>날짜명  <BiCheckSquare /></li>
    </ul>
  )
}

export default function Search(){
  const [toggle,setToggle] = useState(false)
  return (
  <div id="search">
    <div>
     <BiSearch />
     <input type="text" />
     <button 
      type="button"
      onClick = {() => setToggle(!toggle)}
      ><BiDownArrow /></button>
     <DropDown
      toggle = {toggle} />
    </div>

  </div>
  );
}