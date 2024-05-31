const form=document.querySelector('form')
const h1=document.querySelector('.result1')
let n=form.children[0];
let button=form.children[1];
console.log("factors:");
form.addEventListener('submit',function(event){
 event.preventDefault();
 let v=Number(n.value);
    let str="";
    for(let i=1;i<=v;i++)
    {
        if(v%i==0)
        {
            str=str+i+" ";
        }
    }
    h1.textContent=str;
});