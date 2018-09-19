/* importar as configuracoes do servidor */
var app		= require('./config/server');

/* parametrizar a porta de escuta - HTTP */
var server	= app.listen(80, () => {
	console.log('Servidor online.');
});

// Socket
require('socket.io').listen(server);