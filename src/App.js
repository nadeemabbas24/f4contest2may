import './App.css';
import { useEffect, useState } from 'react';
import Table from './components/Table';

function App() {
  let [dataArr, setDataArr] = useState([]);

  useEffect(()=>{
    let data = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    data.then(res=>{
      return res.json();})
    .then((data)=>{
      setDataArr(data);})
    .catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <Table data = {dataArr}></Table>    
    </div>
  );
}

export default App;
