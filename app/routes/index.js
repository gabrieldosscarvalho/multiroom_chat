module.exports	= (application) => {
	application.get('/', (request, response) => {
		response.send('Teste');
	});
};