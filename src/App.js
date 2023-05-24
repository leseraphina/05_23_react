import AddInfo from "./components/Addinfo";
import Search from "./components/Search";
import './App.css';
import { useCallback, useEffect, useState } from "react";

function App() {
  //  state
 const [list,setList] = useState([]);
 const [sortBy, setSortBy] = useState('petName');
 const [query,setQuery] = useState('');

//  함수
//const sortList = list.filter().sort()
const sortList = list.filter((item) => {
  return (
    item.petName.toLowerCase().includes(query.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(query.toLowerCase()) 
    )
})
.sort(
  (a,b) => {
    return (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1)
  }
)
//  useCallback
 const Data = useCallback(
  () =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setList(data))
  },[])

// useEffect
  useEffect(Data,[Data])


  return (
    <div id="box">
      <Search
        sortBy = {sortBy}
        onSortChange = {(mySort) => {setSortBy(mySort)}}
        query={query}
        onQueryChange = {(myQuery) =>setQuery(myQuery)}
        />
      <div id="list">
        <ul>
          {sortList.map((listItem) => (
          <AddInfo
            key={listItem.id}
            listItem = {listItem} 
            onDelete={(myId) => setList(list.filter(item => item.id !== myId))}
            />
            
            ))}
    
        </ul>
      </div>
    </div>
  );
}

export default App;
// 21 - 31 -> 추가부분 프로젝트 새로 만들기
