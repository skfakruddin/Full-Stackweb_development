let a,b;
a=10,b=20;
if(a>b)
{
    console.log(" a is greater than b");
}
else
{
    console.log(" b is greater than a");
}

let x,y,z;
x=10,y=20,z=30;
if(x>y && x>z)
{
    console.log(" x is greater than y and z");
}
else if(y>x && y>z)
{
    console.log(" y is greater than x and z");
}
else
{
console.log(" z is greater than x and y");
}
//factors
function findFactors(n)
{
    let factors =[];
    for(let i=1;i<=n;i++)
    {
        if(n%i===0)
    {
        factors.push(i);
    }
}
return factors;
}
console.log(findFactors(10));


// prime numbers
let n = 10;
let flag = false;
for(let i=2;i<n;i++)
{
    if(n%i===0)
    {
        flag = true;
        break;
    }
}
if(flag)
{
    console.log("not a prime number");
}
else
{
    console.log(" prime number");
}

//print even factors
function findEvenFactors(n)
{
    let factors =[];
    for(let i=1;i<=n;i++)
    {
        if(n%i===0 && i%2===0)
    {
        factors.push(i);
    }
}
return factors;
}
console.log(findEvenFactors(10));

//recieve number and return the sum of digits

function sumOfDigits(n)
{
    let sum = 0;
    while(n>0)
    {
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}
console.log(sumOfDigits(1234));