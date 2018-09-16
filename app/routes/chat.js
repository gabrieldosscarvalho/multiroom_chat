module.exports	= (application) => {
	application.get('/chat', (request, response) => {
		response.render('chat');
	});

	application.post('/chat', (request, response) => {
		response.render('chat');
	});
};