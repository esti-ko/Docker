//GET all /public
 const { parse } = require('dotenv');
// const fs = require('fs');
// const DB =require('../../DB.js');
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "http://localhost:3306"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//       });
//   });


exports.getBootcamps = (req,res,next)=>{

   
    // try {
    //     const fd = fs.openSync('./DB.json', 'r')
    //     console.log(fd);
    //   } catch (err) {
    //     console.error(err)
    //   }
    // 'use strict';
    // const fs = require('fs');
    // let rawdata = fs.readFileSync('./DB.json');
    // let student = JSON.parse(rawdata);
    // console.log("1",student);
   //let rawdata = fs.readFileSync('../../DB.json');
//    res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ id:1,name:'Ester',value:'1234',fff }));
     res.status(200).json({success:true, data:{msg:'Show all bootcamps', DB}});
}

//GET signal by id 
exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Show bootcamp ${req.params.id}`});
}

//POST create new /private
exports.postBootcamp = (req,res,next)=>{

    try{
        // console.log("req: ",req)
        // console.log("req body: ",req.body)
        // fs.writeFileSync('../../DB.json',JSON.stringify(req.body.data));
        console.log(req.body)
        console.log(req.body.data)
        DB.id=req.body.data;
        console.log(DB);
        res.status(200).json({success:true, msg:'Create new bootcamp'});
    }catch(error){
        console.log('Error parsing JSON string:', error)
    }
    
    
}

//PUT update by id /private
exports.putBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Update bootcamp ${req.params.id}`});
}

//DELETE by id /private
exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Delete bootcamp ${req.params.id}`});
}