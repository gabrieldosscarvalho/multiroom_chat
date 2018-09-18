module.exports.iniciaChat	= function( application, request, response ){
	let dadosForm	= request.body;

	request.check('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
	request.check('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

	let erros		= request.validationErrors();

	if( erros ) {
		response.render('index', {validacao: erros});
		return;
	}

	response.render('chat');
};