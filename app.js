require('dotenv').config();
const express = require('express');

const middlewares = require('./middlewares');
const { errorResponse, successResponse } = require('./controllers/responseController');

const userRoute = require('./routers/userRoute');
const productRoute = require('./routers/productRoute');

const app = express();

middlewares(app);

app.get('/', (req, res) => {
    successResponse(res, {
        statusCode: 200,
        message: 'Server respond properly'
    });
});

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);


app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: err.status,
        message: err.message
    });
});


module.exports = app;
