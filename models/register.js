/*
    Данный файл содержит обёртки для регистрации
 */
const db = require(../lib/db);

exports.register = function(username,surname,login,password,email){
    db.none("INSERT INTO users(username,surname,login,password,email) VALUES('" + username + "', '" + surname +"', '" + login +"', '" + password +"', '" + email +"')");

    .then(function(){
        return true;
    })
    .catch(function(error){
        console.log('Ошибка регистрации пользователя! Срочно проверить метод регистрации');
    })
};