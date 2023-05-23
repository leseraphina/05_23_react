import AddInfo from "./components/Addinfo";
import Search from "./components/Search";
import './App.css';
import { useCallback, useEffect, useState } from "react";
function App() {
 const [list,setList] = useState([]);

 const Data = useCallback(
  () =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setList(data))
  },[])

  useEffect(Data,[Data])
  return (
    <div id="box">
      <Search />
      <div id="list">
        <ul>
          {list.map((listItem) => (
          <AddInfo
            key={listItem.id}
            listItem = {listItem} />))}
    
        </ul>
      </div>
    </div>
  );
}

export default App;
