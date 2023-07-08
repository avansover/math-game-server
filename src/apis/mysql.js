"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlQueryMaker = void 0;
const mysql_1 = __importDefault(require("mysql"));
const sqlConnection = mysql_1.default.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7630477",
    password: "eV4IUrhQZH",
    database: "sql7630477"
});
const sqlQueryMaker = () => {
    sqlConnection.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        sqlConnection.query("SELECT * FROM Characters", function (err, result) {
            if (err)
                throw err;
            console.log("Result: " + result);
            sqlConnection.end(function (err) {
                if (err)
                    throw err;
                console.log("Connection closed.");
            });
        });
    });
};
exports.sqlQueryMaker = sqlQueryMaker;
