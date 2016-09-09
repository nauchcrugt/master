var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    errors = require('./midd/error.js'),
    logs = require('./midd/logger.js'),
	dotenv = require('dotenv'),
    path = require('path');



//Environment

	dotenv.load();
	
//Routes include

var indexRouter = require('./routes/index'),
    cabRouter = require('./routes/cab');

//Устанавливаем параметры

/*Disable*/
app.disable('x-powered-by');


/*Set*/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/pages'));
app.set('view cache');


/*Middleware*/
app.use(bodyParser.urlencoded({extended: true})); //BP
app.use(express.static(path.join(__dirname, '/static'))); //Static Files
app.use(logs());


/*Здесь будут роуты*/
app.use('/', indexRouter);
app.use('/cab', cabRouter);

//Прослушивание и обработка ошибок

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Listening on port: ' + port);
    //console.log(process.env.LOL);
});

//errors middleware
app.use(errors());

module.exports = app;