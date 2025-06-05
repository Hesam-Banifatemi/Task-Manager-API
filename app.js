const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const CONNECT_DB = require('./db/connect');
require('dotenv').config();
const router = require('./routes/route');
const errorHandlerMiddleware = require('./middlewares/error-handler');
//middlewares
app.use(express.json());
//routers
app.use('/api/v1/tasks', router);
app.use(errorHandlerMiddleware);


const start = async() => {
    try {
        await CONNECT_DB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`);
        });
    } catch(error) {
        console.log(error);
    }
};
start();