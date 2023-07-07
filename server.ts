import cors from 'cors';
import express from 'express';
import userRouter from './routers/userRouter';
import bodyParser from 'body-parser';
import { sqlConnection1 } from './apis/mysql';

const app = express();

const port: number = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/user', userRouter);

// var con = mysql.createConnection({
//     host: "sql7.freesqldatabase.com",
//     user: "sql7630477",
//     password: "eV4IUrhQZH"
// });

sqlConnection1()

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 