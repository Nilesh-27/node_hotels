const mongoose = require('mongoose');
require('dotenv').config();


// Define the MongoDB connnection URL

//const mongoURL=process.env.MONGODB_URL_LOCAL // Replace 'hotels' with your database
const mongoURL = process.env.MONGODB_URL;
// set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db =mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',(err)=>{
    console.log('MongoDB connection error',err);
})


db.on('disconnected',()=>{
    console.log('MongoDB server disconnected');
})

// export the database connection

module.exports = db;