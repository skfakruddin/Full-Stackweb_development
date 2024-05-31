const form=document.querySelector("form")
const h1=document.querySelector(".result1")
const h2=document.querySelector(".result2")
const h3=document.querySelector(".result3")
const h4=document.querySelector(".result4")
const h5=document.querySelector(".result5")

let firstinput=form.children[0];
let secondinput=form.children[1];
let button=form.children[2];
form.addEventListener('submit',function(event){
 event.preventDefault();
 let v1=Number(firstinput.value);
   let v2= Number(secondinput.value);
   let sum=v1+v2;  
   let sub=v1-v2;
    let mul=v1*v2;
    let div=v1/v2;
    let mod=v1%v2;
    h1.textContent=sum;
    h2.textContent=sub;
    h3.textContent=mul;
    h4.textContent=div;
    h5.textContent=mod;
});
// add.addEventListener('submit',function(event){

// })