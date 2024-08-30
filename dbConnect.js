const mongoose = require('mongoose');
const URL = 'mongodb+srv://codingx252:aryahe9@cluster0.6phou8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongo DB connection successful');
})
connection.on('error', (error) => {
    console.log(error);
})