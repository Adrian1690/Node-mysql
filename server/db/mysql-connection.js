import mysql from 'mysql';

export const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    database: 's3uprade',
    port: 33060
});