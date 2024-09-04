const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
  console.log('Client connected');

  // Envia dados para o cliente a cada 5 segundos
  const sendData = () => {
    const data = [
      { x: ["John", "Doe"], y: Math.floor(Math.random() * 100) },
      { x: ["Joe", "Smith"], y: Math.floor(Math.random() * 100) },
      { x: ["Jake", "Williams"], y: Math.floor(Math.random() * 100) },
      { x: "Amber", y: Math.floor(Math.random() * 100) },
      { x: ["Peter", "Brown"], y: Math.floor(Math.random() * 100) },
      { x: ["Mary", "Evans"], y: Math.floor(Math.random() * 100) },
      { x: ["David", "Wilson"], y: Math.floor(Math.random() * 100) },
      { x: ["Lily", "Roberts"], y: Math.floor(Math.random() * 100) }
    ];
    ws.send(JSON.stringify(data));
  };

  const interval = setInterval(sendData, 5000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});
