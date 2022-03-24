//GET all /public
// const {file} =require('../../DB.json');
const fs = require('fs');


exports.getBootcamps = (req,res,next)=>{
    let rawdata = fs.readFileSync('../../DB.json');
    res.status(200).json({success:true, msg:'Show all bootcamps' ,hello:req.hello});
}

//GET signal by id 
exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Show bootcamp ${req.params.id}`});
}

//POST create new /private
exports.postBootcamp = (req,res,next)=>{

    try{
        console.log("req: ",req)
        console.log("req body: ",req.body)
        fs.writeFileSync('../../DB.json',JSON.stringify(req.body.data));
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