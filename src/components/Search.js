import { useState } from 'react';
import {BiSearch,BiCheckSquare,BiDownArrow} from 'react-icons/bi'

function DropDown({toggle,sortBy, onSortChange}){
  console.log(toggle)
  if(!toggle){
    return null
  }
  return (
    <ul>
      <li
      onClick = {() => onSortChange('petName')}
      >
        애기이름
         {(sortBy === 'petName') && <BiCheckSquare />}
         </li>
      <li
      onClick = {() => onSortChange('ownerName')}
      >
        예약자명
          {(sortBy === "ownerName") && <BiCheckSquare />}
          </li>
      <li
      onClick = {() => onSortChange('aptDate')}
      >
        날짜명
          {(sortBy === "aptDate") && <BiCheckSquare />}
          </li>
    </ul>
  )
}

export default function Search({sortBy, onSortChange,query,onQueryChange}){
  const [toggle,setToggle] = useState(false)
  return (
  <div id="search">
    <div>
     <BiSearch />
     <input 
      type="text"
      value={query}
      onChange = {(e) => {onQueryChange(e.target.value)}} />
     <button 
      type="button"
      onClick = {() => setToggle(!toggle)}
      ><BiDownArrow /></button>
     <DropDown
      toggle = {toggle}
      sortBy = {sortBy}
      onSortChange = {(mySort) => onSortChange(mySort)} />
    </div>

  </div>
  );
}