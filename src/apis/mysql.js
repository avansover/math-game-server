"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlQueryMaker = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const sqlConnection = mysql2_1.default.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7630477",
    password: "eV4IUrhQZH",
    database: "sql7630477"
});
const sqlQueryMaker = (query) => {
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
                }
                else {
                    console.log('Connection closed.');
                }
            });
        });
    });
};
exports.sqlQueryMaker = sqlQueryMaker;
