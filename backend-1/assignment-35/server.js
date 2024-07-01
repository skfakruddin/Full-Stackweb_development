// const exp = require('express');
// const app=exp();
// const productList=[
//     {id:1,name:'iphone 15'},
//     {id:2,name:'vivo v30'}
// ];
// app.get('/products',(req,res)=>{
//     res.send({message:'All users',payload:productList});
// });

// app.get('/products/:id',(req,res)=>{
//     const productId=Number(req.params.id);
//     let productById=productList.find(product => product.id == productId);
//     if(productId===undefined){
//         res.send({message:'product not found'});
//     }
//     else{
//         res.send({message:'product by Id',payload: productById });
//     }
// });

// app.use(exp.json());
// app.post('/products',(req,res)=>{
//     let newProduct=req.body;
//     productList.push(newProduct);
//     res.send({message:'New product Created',payload:newProduct});
// });

// app.put('/products',(req,res)=>{
//     let updatedProduct=req.body;
//     let index=productList.findIndex(product=>product.id==updatedProduct.id);
//     if(index===-1){
//         res.send({message:'product not found'});
//     }
//     else{
//         productList[index]=updatedProduct;
//         res.send({message:'product Updated',payload:updatedProduct});
//     }
// });
// app.delete('/products/:id',(req,res)=>{
//     const productId=Number(req.params.id);
//     let index=productList.findIndex(product=>product.id==productId);
//     if(index===-1){
//         res.send({message:'product not found'});
//     }
//     else{
//         productList.splice(index,1);
//         res.send({message:'product Deleted'});
//     }
// });







// const port=4000;
// app.listen(port,()=>{
//     console.log(`currentls server runnimg on port http://localhost:${port}`);
// });
