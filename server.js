const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const Person=require('./models/Person');

const MenuItem=require('./models/Menu');
require('dotenv').config();
app.use(bodyParser.json());  // req.body 
const passport=require('./auth');

// Middleware Functions
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next middleware or route handler
}

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleWare=passport.authenticate('local',{session:false});
app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
  })
// Import the router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuRoutes');

// Use the routes
app.use('/person',localAuthMiddleWare,personRoutes);
app.use('/menu',localAuthMiddleWare,menuItemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log("App is running")
})