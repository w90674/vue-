const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
let app=express();
app.use((req,res,next)=>{

	next();
});
app.get('/my/signin',(req,res)=>{

});
let users=fs.readFileSync('./user.json');
users=JSON.parse(users);
console.log(users);
app.get('/homeproduct',(req,res)=>{

});
app.post('/my/signin',(req,res)=>{
    console.log(req.body);
});
app.get('/my/signup',(req,res)=>{

});
app.post('/my/signup',(req,res)=>{

});
app.listen(5801,()=>console.log('监听端口5801成功'));
