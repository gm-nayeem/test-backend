require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'test server responded'
    });
});

app.get('/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'hi, i am from test server'
    });
});


app.listen(process.env.PORT, () => {
    console.log('server listening properly')
});