var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
//    errors = require('./midd/error.js'),
    logs = require('./midd/logger.js');


//Other Requires

//Routes include

var indexRouter = require('./routes/index'),
    cabRouter = require('./routes/cab');

//Устанавливаем параметры

/*Disable*/
app.disable('x-powered-by');

/*Set*/

app.set('view engine', 'pug');
app.set('views', __dirname + '/pages');

/*Middleware*/

app.use(bodyParser.urlencoded({extended: true})); //BP
app.use(express.static(__dirname + '/static')); //Static Files
app.use(logs());


//Здесь будут роуты

app.use('/', indexRouter);
app.use('/cab', cabRouter);

//Прослушивание и обработка ошибок

//app.use(errors());
var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server has started');

module.exports = app;