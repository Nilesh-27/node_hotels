const express = require('express')
const app = express();
const db = require('./db');
const Person = require('./models/Person');
const bodyParser = require('body-parser');
const MenuItem=require('./models/Menu');
app.use(bodyParser.json());  // req.body 
app.get('/', function (req, res) {
  res.send('Welcome to our Hotel');
})

app.get('/admin',(req,res)=>{
    res.send("new Start")
});
app.get('/panner',(req,res)=>{
    res.send("chilli panner is ready !! enjoy your meal")
})

app.get('/idli', (req,res)=>{
    var customized_idli ={
        name:'rava idli',
        size:'10 cm diameter',
        is_sambar:true
    }
    res.send('welcome to south india and would love to serve IDLI')
})
app.post('/items',(req,res)=>{
    res.send("items saved")
})

// Import the router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuRoutes');

// Use the routes
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000,()=>{
    console.log("App is running")
})