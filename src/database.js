const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    port: '3306',
    user: 'bd27688926f172',
    password: 'b54f6127',
    database: 'heroku_3365cf75d9a5ad5'
});
// mysql://bd27688926f172:b54f6127@us-cdbr-east-04.

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB esta conectada');
    }
});

module.exports  = mysqlConnection;