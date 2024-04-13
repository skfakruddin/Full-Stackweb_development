let firstRank=true;
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
 console.log("end of the code"); 