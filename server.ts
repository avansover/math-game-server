import cors from 'cors';
import express from 'express';
import userRouter from './routers/userRouter';
import bodyParser from 'body-parser';
import { sqlQueryMaker } from './apis/mysql';

const app = express();

const port: number = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/user', userRouter);


async function fetchData() {
    try {
        await sqlQueryMaker();
        // Perform actions after the query has completed successfully
    } catch (error) {
        // Handle the error
    }
}

fetchData()

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 