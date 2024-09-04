import {useEffect, useState} from 'react'
import Chart from './Chart'
import {  getCandles  } from './DataService'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getCandles('BTCUSDT', '1m')
     .then(data => setData(data))
     .catch(err => alert(err.response ? err.response.data: err.message))
  },[])

  return (
   <div>
      <Chart data={data}/>
   </div>
  );
}

export default App;
