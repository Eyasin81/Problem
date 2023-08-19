const StudentsModel=require('../models/StudentModel')
exports.InsertStudent=(req,res)=>{
   const reqBody=req.body
   StudentsModel.create(reqBody,(err,data)=>{
     if(err){
      res.status(400).json({Status:"Fail",data:err})
     }else{
      res.status(201).json({status:"Success",data:data})
     }
   })
}





/* // C=Create
exports.InsertStudent=(req,res)=>{
   let reqBody= req.body;
   StudentsModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}
 */