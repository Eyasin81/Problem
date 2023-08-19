/* exports.zero=(req,res)=>{
    res.status(200).json({
    Name:"Eyasin",
    Age:"24",
    City:"Naogaon"

    })
}
exports.zero11=(req,res)=>{
    res.status(201).json({
    Name:"Eyasin",
    Age:"24",
    City:"Dhaka"

    })
} */
// Method-1
/* exports.Hello=(req,res)=>{
res.status(200).json({status:"ok",Data:"This is my First Api"})
} */

// exports.HelloGet=(req,res)=>{
// res.status(200).json({status:"ok",Dat:"Hello Post"})
// }

// exports.HelloPost=(req,res)=>{
//     res.status(201).json({status:"ok",Data:"Hello Get"})
//     }
    



exports.Hello=(req,res)=>{
    res.status(200).json({dat:"ok",name:"eyasin"})
}
exports.nill=(req,res)=>{
    res.status(200).json({name:"EyasinALi",age:"24"})
}
exports.Bill=(req,res)=>{
    res.status(200).json({name:"ALi",age:"24"})
}
exports.Student=(req,res)=>{
    res.status(200).json({
        id:334723,
        name:"Abdur Rahman",
        age:24,
        city:"Dhaka",
        height:"5.7",
        bodyColor:"gray",
        gender:"male",
        email:"example@.com",
        phone:"+880178212234",
        address:{
            houseNo:'1',
            streetName:"MohammudPur"
        },
        id:334722,
        name:"Adullah",
        age:24,
        city:"Dhaka",
        height:"5.7",
        bodyColor:"gray",
        gender:"male",
        email:"example@.com",
        phone:"+880178212234",
        address:{
            houseNo:'1',
            streetName:"MohammudPur"
        },

    })
}