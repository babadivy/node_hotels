/*function add(a,b){
    return a+b;
}
let result=add(223,33);
console.log(result);*/
/*let fs=require('fs');
let os=require('os');
let user= os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile('greeting.txt','Hi'+user.username+ '!',()=>{
    console.log('file created');
})*/


/*const notes =require('./notes.js');
var _=require('lodash');



console.log('server is available');
let age =notes.age;
console.log(age);
let r=notes.addNumber(age,22);


console.log(r);


let data=['person','person',1,1,2,3,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString('hello'));*/

// const jsonString ='{"name":"jon","age":22,"city":"gkp"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.name);

// const ObjectToConvert={
//     name:"jon",
//     age:22
// };
// const json=JSON.stringify(ObjectToConvert);
// console.log(json);

//CREATING API


const express = require('express');
const app = express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const Person=require('./models/person');
const MenuItem=require('./models/menu');



// app.get('/',(req, res)=> {
//     res.send('Hello World')
//   })
// app.post('/person',async (req,res) =>{


    // const data= req.body
    // const newPerson=new Person(data);


    // newPerson.name=data.name;
    // newPerson.age=data.age;
    // newPerson.mobile=data.mobile;
    // newPerson.email=data.email;
    // newPerson.address=data.address;
    // newPerson.salary=data.salary;


    // newPerson.save((error,savedPerson) => {
    //     if(error){
    //         console.log('Error', error);
    //         res.status(500).json({error:'Internal error'})
    //     }
    //     else{
    //         console.log('data saved successfully');
    //         res.status(200).json({savedPerson});
    //     }
    // })

//     try {
//         const data= req.body
//         const newPerson=new Person(data);
//         const response=await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);


        
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'internal error'})
        
//     }
// })     

// app.get('/person',async (req,res)=>{
//     try {
//         const data=await Person.find()
//         console.log('data fetched');
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'internal error'})
        
//     }
// }
// )
// app.get('/person/:workType',async(req,res)=>{
//     try {
//         const workType=req.params.workType;
//         if(workType=='chef'|| workType=='waiter' || workType == 'manager'){
//             const response=await Person.find({work: workType});
//             console.log('response fetched');
//             res.status(200).json({response});
//         }else{
//             res.status(404).json({error:'invalid work type'})
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'Internal server error'});
//     }
// })


// app.post('/menu',async(req,res)=>{
//     try{
//         const data=req.body
//         const NewMenu= new MenuItem(data);
//         const response=await NewMenu.save();
//         console.log('Data saved');
//         res.status(200).json(response);
//      }
//     catch(error)
//     {
//         console.log('error');
//         res.status(500).json(error,'internal error');
//     }
// })

// app.get('/menu',async (req,res)=>{
//     try {
//         const data=await Person.find()
//         console.log('data fetched');
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'internal error'})
        
//     }
// }
// )

// app.get('/chicken',function (req, res){
//     res.send('sure sir, I would love to serve chicken')
// })

// app.get('/idli',function (req, res){
//     res.send('sure sir, I would love to serve idly')
// })

// app.post('/item',function(req,res){
//     res.send('data is save')
// })

const personRouter=require('./routes/personRoutes');

app.use('/person', personRouter);


const menuItemRouter=require('./routes/menuItemRoutes');
app.use('/menu', menuItemRouter);
app.listen(3000)