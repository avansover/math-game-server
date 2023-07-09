
import mysql from 'mysql2';

const sqlConnection = mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7630477",
    password: "eV4IUrhQZH",
    database: "sql7630477"
});

export const sqlQueryMaker = (query: string) => {
    return new Promise((resolve, reject) => {
      sqlConnection.connect(err => {
        if (err) {
          console.error('Connection error:', err);
          reject(err);
          return;
        }
        console.log('Connected!');
  
        sqlConnection.query(query, (err, result) => {
          if (err) {
            console.error('Query error:', err);
            reject(err);
            return;
          }
          resolve(result);
        });
  
        sqlConnection.end(err => {
          if (err) {
            console.error('Connection closure error:', err);
          } else {
            console.log('Connection closed.');
          }
        });
      });
    });
  };