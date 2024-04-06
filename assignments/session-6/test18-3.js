
let prime=[11,12,13,16,17,18,17,19,20];
let q=prime.filter(function(prime)
{
    for(let i=2;i<=Math.sqrt(prime);i++)
    {
        if(prime%i==0)
        {
            return false;
        }
    }
    return true;

}
)
console.log(q);