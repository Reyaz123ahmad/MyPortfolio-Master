
const Form = require('../models/Form');

exports.updateForm=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,phone,email,message}=req.body;
        const form=await Form.findByIdAndUpdate(
            {_id:id},
            {name,phone,email,message,updatedAt:Date.now()}
        
        )
        res.status(200).json({
            success:true,
            data:form,
            message:'form updated successfully'
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server issue'
        })
    }

}