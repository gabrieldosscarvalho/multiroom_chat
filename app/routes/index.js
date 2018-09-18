module.exports	= (application) => {
	application.get('/', (request, response) => {
		application.app.controllers.index.home( application, request, response );
	});
};