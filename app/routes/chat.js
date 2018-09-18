module.exports	= (application) => {
	application.get('/chat', (request, response) => {
		application.app.controllers.chat.iniciaChat( application, request, response );
	});

	application.post('/chat', (request, response) => {
		application.app.controllers.chat.iniciaChat( application, request, response );
	});
};