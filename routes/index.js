var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var webController  = require('../controllers/web_controller');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', webController.author);

module.exports = router;