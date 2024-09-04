import { useEffect, useState } from 'react';
import Chart from './Chart';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <Chart data={data} />
    </div>
  );
}

export default App;
