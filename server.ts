import cors from 'cors';
import express from 'express';
import userRouter from './routers/userRouter';
import bodyParser from 'body-parser';

const app = express();

const port: number = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/user', userRouter);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 