const WebSocket = require('ws');
const mysql = require('mysql');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
  console.log('Client connected');

  // Envia dados para o cliente a cada 5 segundos
  const sendData = () => {
    const con = mysql.createConnection({
      host: "3.215.46.11",
      user: "richard",
      password: "teste01&",
      database: "gintecteste"
    });

    con.query("SELECT u.nome, CONCAT(sala.serie, 'º ', sala.descricao) AS sala_nome, SUM(CASE WHEN atv.codigo IS NOT NULL THEN 600 ELSE 0 END) AS pontos, CASE WHEN SUM(CASE WHEN atv.codigo IS NOT NULL THEN 600 ELSE 0 END) >= 600 THEN '600 ou mais pontos' ELSE 'Menos de 600 pontos' END AS categoria_pontos FROM tabusuario AS u LEFT JOIN tabatividadecampeonatorealizada AS atv ON u.codigo = atv.usuariocodigo JOIN tabsala AS sala ON u.salaCodigo = sala.codigo GROUP BY u.nome, sala.descricao, sala.serie HAVING pontos >= 600 ORDER BY pontos DESC LIMIT 10;", function (err, result, fields) {
      if (err) throw err;
     // result.sort((a, b) => b.pontos - a.pontos); // Garantir que os dados estejam ordenados
      console.log('Sending data:', result); // Log dos dados enviados
      ws.send(JSON.stringify(result));
    });

  };

  const interval = setInterval(sendData, 5000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});
