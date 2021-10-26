import bodyParser from 'body-parser';
import express from 'express';

import { routes } from './routes';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
    });
    next();
});

routes.forEach((route) => {
    app.use(route);
});

const port = 3000;
app.listen(port, () => {
    console.log(`API Mock running at http://localhost:${port}`);
});
