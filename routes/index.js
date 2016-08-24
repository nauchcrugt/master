var express = require('express');
var router = express.Router();

//Основной заголовок

router.get('/', function (req,res){
    res.render('index/index');
});

module.exports = router;