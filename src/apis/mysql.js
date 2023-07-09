"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const sqlQueryMaker = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new Promise((resolve, reject) => {
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
                    }
                    else {
                        console.log("Connection closed.");
                    }
                });
            });
        });
    }
    catch (error) {
        console.log("sqlQueryMaker error");
        console.log(error);
    }
});
exports.sqlQueryMaker = sqlQueryMaker;
