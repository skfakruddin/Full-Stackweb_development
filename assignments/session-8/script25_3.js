let form=document.querySelector("form")
let line=document.querySelector(".result")
let h1=document.querySelector(".res")
let add=document.querySelector("#add")
let sub=document.querySelector("#sub")
let mul=document.querySelector("#mul")
let div=document.querySelector("#div")
let mod=document.querySelector("#mod")
let firstinput=document.querySelector(".n1")
let secondinput=document.querySelector(".n2")

form.addEventListener('submit',function(event){
 event.preventDefault();
});
add.addEventListener('click',function(){
  h1.textContent=Number(firstinput.value)+Number(secondinput.value)
});
sub.addEventListener('click',function(){

  h1.textContent=Number(firstinput.value)-Number(secondinput.value)
});
mul.addEventListener('click',function(){
  h1.textContent=Number(firstinput.value)*Number(secondinput.value)
});
div.addEventListener('click',function(){
  h1.textContent=Number(firstinput.value)/Number(secondinput.value)
});
mod.addEventListener('click',function(){
  h1.textContent=Number(firstinput.value)%Number(secondinput.value)
});
