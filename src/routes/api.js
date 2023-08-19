/* const express = require("express");
const HelloContoller=require("../controller/helloController")
const router=express.Router()
router.get("/hello-get",HelloContoller.HelloGet)
router.post("/hello-post",HelloContoller.HelloPost)
module.exports=router; */
//my code
// const express = require('express')
// const HelloController=require("../controller/helloController")
// const router=express.Route()
// router.get("/hello-get",HelloController.Hello)
// router.post("/hello-post",HelloController.Hello)
// module.exports=router

// const { Router } = require('express')

// const express=require('express')
// const helloController=require('../controller/Hello')
// const router=express.Router()
// // Router url=/hello-get file require=helloController expotstName=HelloGet
// router.get("/hello-get",helloController.HelloGet)
// router.post("/hello-post",helloController.HelloPost)
// module.exports=router;
const express=require('express')
// extra add
const helloControllers=require('../controller/pracitce1')
// 79 videos
const StudentsModel=require('../controller/StudentController')
const router=express.Router()
router.get('/hello-get',helloControllers.Hello)
router.post('/hello-post',helloControllers.Hello)
router.get('/nill-bill',helloControllers.Bill)
router.post('/nill-nill',helloControllers.nill)
router.get('/student-info',helloControllers.Student)
// mongoose
router.post('/insertStudent',StudentsModel.InsertStudent)
module.exports=router
