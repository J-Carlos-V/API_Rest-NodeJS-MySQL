const mysql = require('mysql');

const mysqlConnection =  mysql.createcreatePool({
    host: 'us-cdbr-east-04.cleardb.com',
    port: '3306',
    user: 'bd27688926f172',
    password: 'b54f6127',
    database: 'heroku_3365cf75d9a5ad5'
});
// mysql://bd27688926f172:b54f6127@us-cdbr-east-04.



module.exports  = mysqlConnection;