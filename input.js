let connection;

const setupInput = function (client) {
    connection = client
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data', handleUserInput)
    return stdin;
  };


const handleUserInput = function (key) {
    if (key === '\u0003') {
        process.exit();
    }
    if (key === 'w') {
        connection.write("Move: up")
    } else if (key === 's') {
        connection.write("Move: down")
    } else if (key === 'a') {
        connection.write("Move: left")
    } else if (key === 'd') {
        connection.write("Move: right")
    } else if (key === 'e') {
        connection.write("Say: Snakes go SSSSSSS")
    } else if (key === 'q') {
        connection.write("Say: woah mama")
    }
};

module.exports = setupInput;