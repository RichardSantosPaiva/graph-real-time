import {useEffect} from 'react'
import Chart from './Chart'
import {  getCandles  } from './DataService'

function App() {

  useEffect(() => {
    getCandles('BTCUSDT', '1m')
     .then(data => console.log(data))
     .catch(err => alert(err.response ? err.response.data: err.message))
  },[])

  return (
   <div>
      <Chart/>
   </div>
  );
}

export default App;
