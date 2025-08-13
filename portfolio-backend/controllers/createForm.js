
const Form=require('../models/Form');
exports.createForm=async(req,res)=>{
    try{
        const {name,phone,email,message}=req.body;
        const form=await Form.create({name,phone,email,message})
       
        res.status(200).json({
            success:true,
            data:form,
            message:'Form created successfully'
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            errror:err.message,
            message:'Srever Issue'
        })
    }
}