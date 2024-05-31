const form=document.querySelector("form")
const h1=document.querySelector(".result")

let firstinput=form.children[0];
let secondinput=form.children[1];
let button=form.children[2];
form.addEventListener('submit',function(event){
 event.preventDefault();
 let v1=Number(firstinput.value);
   let v2= Number(secondinput.value);
   let sum=v1+v2;  
   h1.textContent=sum;
});