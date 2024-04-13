/* let firstRank=false;
const probj= new Promise((fullfilled,rejected)=>{
    if(firstRank===true){
        fullfilled("congratulations");
    }else{
        rejected("sorry");
    }
})
probj
 .then((msg)=>{
     console.log(msg);
 })
 .catch((errorMsg)=>console.log(errorMsg));
 console.log("end of the code"); */
 console.log("son made promise");
 let gp=false;
 let frp =new Promise((fullfilled,rejected)=>{
    setTimeout(()=>{
     if(gp===true){
         fullfilled("congratulations");
     }else{
         rejected("sorry");
     }
     },6000);
 });