const mongoose = require('mongoose');


// Define the MongoDB connnection URL

const mongoURL ='mongodb://localhost:27017/hotels' // Replace 'hotels' with your database

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