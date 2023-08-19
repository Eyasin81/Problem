// const app=require("./app")
// // const dotenv=require('./config.env')
// // path er name 
// // dotenv.config({path:'./config.env'})

// // app.listen(process.env.RUNNING_PORT,function(){
// //     console.log("This is from config.env: "+process.env.RUNNING_PORT)
// // })
// app.listen(3000,function(){
//     console.log("This is from config.env: 3000")
// })


//myCode
// const express = require('express')
// const app=require("./app")
// const port = 3000
// app.listen(port, () => {
// console.log
// (`Example app listening on port ${port}!`)
// })


const app = require("./app1");
// 43Security Middleware Implementation
// Day-40 Videos-6
const dotenv=require('dotenv')
dotenv.config({path:"./config.env"})
app.listen(process.env.RUNNING_PORT,()=> {
    console.log("Server Ruing is Success And Port Number "+process.env.RUNNING_PORT)
});

