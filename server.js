const app = require('./app');
const connectDatabase = require('./config/db');

app.listen(process.env.PORT, async () => {
    console.log('Server is running successfully');

    await connectDatabase();
});