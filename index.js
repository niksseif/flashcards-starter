const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');

const os = require('os')
const user = os.userInfo().username
console.log(user)

const Game = require('./src/Game');
const game = new Game();
game.start(user);
