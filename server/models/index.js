import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    database: 's3uprade',
    port: 33060
});

export const list = (callback) => {
    con.connect();

    const query = "select * from test";
    con.query(query, (err, result, fields) => {
        if(err) throw err;

        callback(result);
    });

    con.end();
};