import cors from 'cors';
import express from 'express';
import chararterRouter from './routers/characterRouter';
import userRouter from './routers/userRouter';
import bodyParser from 'body-parser';
import { sqlQueryMaker } from './apis/mysql';

const app = express();

const port: number = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/character', chararterRouter);
app.use('/api/user', userRouter);


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 