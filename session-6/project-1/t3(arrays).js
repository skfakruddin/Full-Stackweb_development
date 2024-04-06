/* let sum=[1,2,3,4,5,6,7,8,9,10];
let total=0;
for(let i=0;i<sum.length;i++){
    total=total+sum[i];
}
console.log('The sum of the numbers is:',total); */
let names=['fakruddin','aditya','vignesh'];
console.log(names);
names.unshift('chaitanya');
console.log(names);
names.splice(2,0,'sai');
console.log(names);
names.push('susruth');
console.log(names);
names.splice(0,1);
console.log(names);

let schoolfriends=['om','harish','koushik'];
let collegefriends=['vignesh','aditya','susruth'];
let allfriends=schoolfriends.concat(collegefriends);
console.log(allfriends);