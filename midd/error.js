/*
    Файл обработки ошибок проекта Науч.Круг - теория
    2016, Максим Дегтярёв


 */


function notFound(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};

function otherError(err,req,res,next){
    res.status(err.status || 500)
    req.headers.accept === 'application/json'
        ? res.json({message: err.message})
        : res.render('service/error', {
        errorTitle : err.status,
        errorCode: 'Произошла ошибка. Попробуйте вернуться на главную страницу'
    });
    next();
}

function exporter(){
    return [
        notFound,
        otherError
    ];
}

module.exports = exporter;

