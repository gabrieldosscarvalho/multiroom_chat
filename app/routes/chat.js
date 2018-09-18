module.exports	= (application) => {
	application.post('/chat', (request, response) => {
		application.app.controllers.chat.iniciaChat( application, request, response );
	});

	application.get('/chat', (request, response) => {
		application.app.controllers.chat.iniciaChat( application, request, response );
	});
};