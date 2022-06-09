const net = require("net");
const { IP, PORT } = require('./constant')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', message => {
      console.log(message);
  });

  conn.on("connect", () => {
      console.log("Successfully connected to the game server")
      conn.write("Name: Dar");
  });

  return conn;
};

module.exports = connect;