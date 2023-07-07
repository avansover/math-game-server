"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const mysql_1 = require("./apis/mysql");
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
app.use('/api/user', userRouter_1.default);
// var con = mysql.createConnection({
//     host: "sql7.freesqldatabase.com",
//     user: "sql7630477",
//     password: "eV4IUrhQZH"
// });
(0, mysql_1.sqlConnection1)();
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
