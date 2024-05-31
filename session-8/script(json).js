// let person={
//     pid:100,
//     name:"John",
//     age:40
// }
// // transform js to json
// let person1=JSON.stringify(person)
// console.log(person1);

// // transform json to js 
// let jsobj = JSON.parse('{"pid":100,"name":"John","age":40}')
// console.log(jsobj);

// contact api 

function getPosts1(){

fetch('https://dummyjson.com/products')
.then(res=>res.json())
.then(sir=>console.table(sir))
.catch(err=>console.log(err));

}
getPosts1();
async function getPosts2(){
try{
let res = await fetch('https://dummyjson.com/products')
let data = await res.json();
console.log(data);

}
catch(err){
console.log(err);
}
}
getPosts2();