
const express=require('express')
const router=express.Router();


const {createForm}=require('../controllers/createForm')
const {getForms}=require('../controllers/getForms')
const {updateForm}=require('../controllers/updateForm')

router.post('/createForm',createForm);
router.get('/getForm',getForms)
router.put('/updateform/:id',updateForm);


module.exports=router