const express=require('express');
const router=express.Router();
const MenuItemRoutes=require('./../models/menu');
const MenuItem = require('./../models/menu');



router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const NewMenu= new MenuItem(data);
        const response=await NewMenu.save();
        console.log('Data saved');
        res.status(200).json(response);
     }
    catch(error)
    {
        console.log('error');
        res.status(500).json(error,'internal error');
    }
})

router.get('/',async (req,res)=>{
    try {
        const data=await MenuItemRoutes.find()
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal error'})
        
    }
}
)

router.get('/:tasteType',async(req,res)=>{
    try {
        const tasteType=req.params.tasteType;
        if(tasteType=='Sweet'|| tasteType=='Spicy' || tasteType == 'Sour'){
            const response=await MenuItemRoutes.find({work: tasteType});
            console.log('response fetched');
            res.status(200).json({response});
        }else{
            res.status(404).json({error:'invalid work type'})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const MenuItemId=req.params.id;
        const updatedMenuData=req.body
        const response=await MenuItemRoutes.findByIdAndUpdate(MenuItemId,updatedMenuData,{
            new:true,
            runValidators:true,
        })
        if (!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const MenuItemId=req.params.id;
        const response=await MenuItem.findByIdAndDelete(MenuItemId);
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('Data deleted')
        res.status(200).json({message:'person deleted successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'})
    }
})

module.exports=router;