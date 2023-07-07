
import mysql from 'mysql';

const sqlConnection = mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7630477",
    password: "eV4IUrhQZH",
    database: "sql7630477"
});


export const sqlConnection1 = () => {
    sqlConnection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        sqlConnection.query("SELECT * FROM Characters", function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
          });
    });
}
