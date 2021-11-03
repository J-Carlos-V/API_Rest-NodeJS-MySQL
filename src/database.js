const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'sql10.freesqldatabase.com',
    port: '3306',
    user: 'sql10448653',
    password: 'cxuF62ch3n',
    database: 'sql10448653'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB esta conectada');
    }
});

module.exports  = mysqlConnection;