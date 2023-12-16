const express = require('express');
const { createServer } = require('http'); // Alteração aqui
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Alteração aqui
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});


io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('sendMessage', (message) => { // Alteração aqui
        console.log('Mensagem: ' + message);
        io.emit('message', message); // Envia a mensagem de volta para todos os clientes
    });

});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(4000, () => {
    console.log('Servidor rodando na porta 4000'); // Alteração aqui
});
