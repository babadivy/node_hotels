const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

router.post('/', async (req,res) =>{
    try {
        const data= req.body
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);


        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal error'})
        
    }
})     

router.get('/', async (req,res)=>{
    try {
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal error'})
        
    }
}
)
router.get('/:workType',async(req,res)=>{
    try {
        const workType=req.params.workType;
        if(workType=='chef'|| workType=='waiter' || workType == 'manager'){
            const response=await Person.find({work: workType});
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
        const PersonId=req.params.id;
        const updatedPersonData=req.body
        const response=await Person.findByIdAndUpdate(PersonId,updatedPersonData,{
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
        const PersonId=req.params.id;
        const response=await Person.findByIdAndDelete(PersonId);
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