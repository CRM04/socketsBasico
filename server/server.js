const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const chalk = require('chalk');

const app = express();
let server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


//mantiene la conxecion del backend
module.exports. io = socketIO(server);
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(chalk.blue(`SERVIDOR CORRIENDO EN PUERTO ${ port }`));

});