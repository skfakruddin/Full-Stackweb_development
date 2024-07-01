const exp = require('express');
const app=exp();
const usersList=[
    {id:1,name:'fakruddin'},
    {id:2,name:'aditya'}
];
app.get('/users',(req,res)=>{
    res.send({message:'All users',payload:usersList});
});

app.get('/users/:id',(req,res)=>{
    const userId=Number(req.params.id);
    let userById=usersList.find(user=>user.id==userId);
    if(userById===undefined){
        res.send({message:'User not found'});
    }
    else{
        res.send({message:'User by Id',payload:userById});
    }
})

app.use(exp.json());
app.post('/users',(req,res)=>{
    let newUser=req.body;
    usersList.push(newUser);
    res.send({message:'New User Created',payload:newUser});
});

app.put('/users',(req,res)=>{
    let updatedUser=req.body;
    let index=usersList.findIndex(user=>user.id==updatedUser.id);
    if(index===-1){
        res.send({message:'User not found'});
    }
    else{
        usersList[index]=updatedUser;
        res.send({message:'User Updated',payload:updatedUser});
    }
});
app.delete('/users/:id',(req,res)=>{
    const userId=Number(req.params.id);
    let index=usersList.findIndex(user=>user.id==userId);
    if(index===-1){
        res.send({message:'User not found'});
    }
    else{
        usersList.splice(index,1);
        res.send({message:'User Deleted'});
    }
});







const port=4000;
app.listen(port,()=>{
    console.log(`currentls server runnimg on port http://localhost:${port}`);
});
