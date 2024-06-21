import cors from 'cors';
import express from 'express';
import chararterRouter from './routers/characterRouter';
import playerRouter from './routers/playerRouter';
import userChararterRouter from './routers/userCharacterRouter';
import classRouter from './routers/classRouter';
import devRouter from './routers/devRouter';
import bodyParser from 'body-parser';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

const port: number = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/player', playerRouter);
app.use('/api/user-character', userChararterRouter);
app.use('/api/character', chararterRouter);
app.use('/api/class', classRouter);
app.use('/api/dev', devRouter);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 