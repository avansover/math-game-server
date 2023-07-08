
import mysql from 'mysql';

const sqlConnection = mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7630477",
    password: "eV4IUrhQZH",
    database: "sql7630477"
});

export const sqlQueryMaker = async () => {
    try {
        await new Promise((resolve, reject) => {
            sqlConnection.connect(err => {
                if (err) {
                    console.error('Connection error:', err);
                    reject(err);
                    return;
                }
                console.log("Connected!");

                const query = "SELECT * FROM Characters";
                sqlConnection.query(query, (err, result) => {
                    if (err) {
                        console.error('Query error:', err);
                        reject(err);
                        return;
                    }
                    console.log("Result:", result);
                    resolve(result);
                });

                sqlConnection.end(err => {
                    if (err) {
                        console.error('Connection closure error:', err);
                    } else {
                        console.log("Connection closed.");
                    }
                });
            });
        });
    } catch (error) {
       console.log("sqlQueryMaker error");
       console.log(error);
    }
};
