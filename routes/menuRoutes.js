const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/Menu');


router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenu=new MenuItem(data);
        const newRecord = await newMenu.save();
        console.log('data saved');
        res.status(200).json(newRecord);
    }
    catch(err){
        console.log(err);
        res.status(500).json(response);
    }
})
router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:taste',async(req,res)=>{
    try{
        const tasteType=req.params.taste;
        if(tasteType=='sour' || tasteType=='sweet' || tasteType=='spicy'){
            const response = await MenuItem.find({taste:tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:'Invalid item'});
        }
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server error'});
    }
})
// Comments added for testing
module.exports=router;