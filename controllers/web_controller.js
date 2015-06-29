// GET /quizes/question

exports.author = function(req, res){
	res.render('author', {author: 'Toni Coll Barber'});
};
