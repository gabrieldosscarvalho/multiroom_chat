module.exports	= (application) => {
	application.get('/', (request, response) => {
		response.render('index');
	});
};