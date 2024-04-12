const mongoose=require('mongoose')
const mongoURL='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db= mongoose.connection;
db.on('connected',()=>
{
    console.log('connected to mongo');

});
db.on('error',(err)=>
{
    console.error('connected to mongo');

});
db.on('disconnected',()=>
{
    console.log('disconnected to mongo');

});

module.exports=db;
