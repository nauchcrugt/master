var ip = require('ip');

function logthis (req,res,next){
    app = console.log('LOG -> ' + Date.now() + ' Method: ' + req.method + ' IP: ' + ip.address());
    next();
};

function exporter(){
    return [
        logthis
    ];
}

module.exports = exporter;