
const Form=require('../models/Form')
exports.getForms=async (req,res)=>{
    try{
        const forms=await Form.find({})
        res.status(200).json({
            success:true,
            data:forms,
            message:'Form data successfully fetched'
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server issue'
        })
    }
}