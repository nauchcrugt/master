var express = require('express');
var router = express.Router();

router.get('/', function(req,res){

    res.render('cabinet/');

});



module.exports = router;