/* const express=require('express')
const router=require('./src/routes/api')
const app=new express()
//version one
// base url= localhost:portNumber/api/v2
app.use('/api/v1',router)
//version Two
// base url= localhost:portNumber/bpi/v2
app.use('/bpi/v2',router)
module.exports=app

// 41Undefined Route
//Day-40 Videos-4
app.use("*",(req,res)=>{
   res.status(401).json({status:"Fail",data:"Not Found",})
})
//  42Security Middleware Implementation
//Day-40 videos-5
//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
// 77Mongoose Database connection
const mongoose=require('mongoose')
//Security Middleware Implement
app.use(cors()) 
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())


// 77 MongoDB Database Connection 
// Mongo DB Database Connection
let URI="mongodb://localhost:27017/School"
let option={user:"",pass:""}
mongoose.connect(URI,option,(err)=>{
   console.log("Connection Success");
   console.log(err);
})
// api 
app.use("/api/v1",router);



 */

const express=require('express');
const router = require("./src/routes/api");
const app=new express();
const bodyParser = require('body-parser');

//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
const Mongoose= require('mongoose');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(bodyParser.json());



//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter)



// Mongo DB Database Connection
// 77 MongoDb
// mongoose.set('strictQuery', true); // Explicitly set to true if you want strict query validation

Mongoose.set('strictQuery', false);
let url="mongodb://127.0.0.1:27017/School";
let OPTION={user:'',pass:''};
Mongoose.connect(url,OPTION,(err)=>{
   if(err){
    console.log(err);
   }else{
    console.log("connection Success");
   }
})

app.use("/api/v1",router);



//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})

module.exports=app;
/* 

const express=require('express');
const router = require("./src/routes/api");
const app=new express();
const bodyParser = require('body-parser');

//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
const mongoose= require('mongoose');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(bodyParser.json());



//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter)



// Mongo DB Database Connection
let URI="mongodb://127.0.0.1:27017/Schools";
let OPTION={user:'',pass:''};
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error);
})

app.use("/api/v1",router);

//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})
module.exports=app;

*/