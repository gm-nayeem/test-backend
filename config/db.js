const mongoose = require('mongoose');
const mongoDbUrl = process.env.MONGODB_URL;

const connectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(mongoDbUrl, options);
        console.log('Database connection established successfully');

        mongoose.connection.on('error', err => {
            console.error('Database connection error: ', err);
        });
    } catch (err) {
        console.error('Could not connect to database: ', err);
    }
}

module.exports = connectDatabase;