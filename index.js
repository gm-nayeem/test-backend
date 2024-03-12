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


app.listen(5005, () => {
    console.log('server listening properly')
});