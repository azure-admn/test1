<<<<<<< HEAD
/**
 * Created by Hossam Elnabawy on 12/01/2017.
 */
let express = require('express');

let router = express.Router();

router.get('/chat', (request, response)=>{
	response.render('chat', {
		title: 'let\'s chat together',
		description: "with runtime chat service.. you can feel the difference",
		pageId : 'chat',
	});
=======
var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res) {

  res.render('chat', {
    pageTitle: 'Chat',
    pageID: 'chat'
  });

>>>>>>> master
});

module.exports = router;
