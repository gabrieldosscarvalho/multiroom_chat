/* importar as configuracoes do servidor */
var app		= require('./config/server');

/* parametrizar a porta de escuta - HTTP */
var server	= app.listen(80, () => {
	console.log('Servidor online.');
});

// Socket
var io		= require('socket.io').listen(server);

app.set('io', io);

/* criar a conexao WebSocket */
io.on('connection', function( socket ){
	console.log('Usuário conectou no SOCKET');

	// Disparado quando um cliente sai da conexao WebSocket
	socket.on('disconnect', function(){
		console.log('Usuário DESconectou no SOCKET');
	});

	// Ouvir mensagem enviada para o servidor
	socket.on('msgParaServidor', function(data){
		socket.emit('msgParaCliente', data); // Para o usuario emissor
		socket.broadcast.emit('msgParaCliente', data); // Para os outros usuários
	});
});