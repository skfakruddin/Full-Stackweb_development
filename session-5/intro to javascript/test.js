/* console.log('hello world')
console.log('h0w r u')
var  a=3;
a=9;
console.log('value of a is:',a)
console.log('datatype of a is:', typeof a)
a='f';
console.log('value of a is:',a)
console.log('datatype of a is:', typeof a)
a='javascript';
console.log('value of a is:',a)
console.log('datatype of a is:', typeof a)
a=true;
console.log('value of a is:',a)
console.log('datatype of a is:', typeof a)
const person={name:'john',age:25};
console.log(person);
let arr=[1,2,3,4,5];
arr[6]=7;
console.log(arr);
f=9;
a='9';
console.log(f);
console.log(a==f)
console.log(a===f)
console.log('hello'+'world');
console.log(a>f);
console.log(a<f);
console.log(a>=f);
console.log(a<=f);
console.log(a!=f);
console.log(a!==f);
console.log(a&&f);
console.log(a||f);
console.log(!a); */
/* let a=30,b=40;
if(a>b)
{
    console.log('a is greater than b');
}
else if (a<b) {
    console.log('a is less than b');
}
else{
    console.log('a is equal to b');
} */
/* a>b?console.log('a is greater than b'):console.log('b is greater than a'); */
/* for(let i=0;i<10;i++)
{
    console.log(i);
} */
/* let v=0;
while(v<10)
{
    console.log(v);
    v++;
} */
/* let c=1;
switch(c)
{
    case 1:
        console.log('case 1');
        break;
    case 2:
        console.log('case 2');
        break;
    case 3:
        console.log('case 3');
        break;
    default:
        console.log('default case');
        break;
} */
let findSum1=(a,b)=>a+b;
console.log(findSum1(89,6));
let findSum=function(a,b)
{
    return a+b;
}
console.log(findSum(5,6));
let bigSum1=(a,b)=>{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}
console.log(bigSum1(5,6));
let bigSum=function(a,b)
{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}
console.log(bigSum(5,6));

function gigSum(a,b)
{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}

let res=gigSum(5,6);
console.log(res);
