let person={
    name:'fakruddin',
    age:18,
}
for(let key in person)
{
    console.log(key,person[key]);
}
person.city='bangalore';
console.log(person);
delete person.age;
console.log(person);
person.name='belenciaga';
console.log(person);

let student={
    sno:3,
    name:'fakruddin',
    age:18,
    city:'bangalore',
    marks:[10,20,30,40,50],
    address:{
        street:'1st main',
        city:'bangalore',
        state:'karnataka',
    },
    getcredits:function(){
        console.log('The marks of the student are:',this.sno);
    },
     };
     console.log(student);
     student.getcredits();
console.log(student.address.street);
     let reviweer={
            name:'fakruddin',
            age:18,
            city:'bangalore',
            reviews:['good','bad','average'],
            getreviews:function(){
                console.log('The reviews of the reviewer are:',this.reviews);
            }
        };
        console.log(reviweer);     





 /// callback function
 function test1(){
    console.log('test1');
 }
 function test2(x)
 {
    console.log('test2',x());
 }

 test2(test1)






 let a=[9,-23,78,65,87,12];
 let b=[],j=0;
 for(let i=0;i<a.length;i++)
 {
    if(a[i]>50)
    {
         b[j]=a[i];
         j++;
    }
 }
    console.log(b);

    /* let r=a.filter(function(value){
        return value>50;
        })
        console.log(r); */

 /*    let res=a.filter(function(element)=>element>50)
        console.log(res); */
 let r=a.map(function(value){
         if(value%2==0)
        return value+10;
    else
        return value+20;
        })
        console.log(r);
 /*    a.forEach(function(index,value){
        console.log(index,value);
    } */
let e=a.reduce((accumulator,element)=>accumulator+element);
console.log(e);



// array of objects using back


let emps = [
    {
        eno: 100,
        name: "John",
        age: 20,
        salary: 25000,
    },
    {
        eno: 101,
        name: "Smith",
        age: 24,
        salary: 26000,
    },
    {
        eno: 102,
        name: "Scott",
        age: 34,
        salary: 27000,
    },
    {
        eno: 103,
        name: "Allen",
        age: 44,
        salary: 28000,
    }
];

let minAgePerson = emps.reduce((min, emp) => {
    return emp.age < min.age ? emp : min;
});
console.log(minAgePerson);
let incSalary=emps.map(function(emp){
    return emp.salary+5000;
});
console.log(incSalary);
// print objects whose age between 15 30
let agebtn=emps.filter(function(emp){
    return emp.age>15 && emp.age<30;
});
console.log("Employees aged from 15 to 30 are:",agebtn);


//object operations
let obj={
    x:10,
    y:20,
}
let k=Object.keys(obj);
console.log(k);
let v=Object.values(obj);
console.log(v);
Object.freeze(obj);

let v1=Object.assign({},obj);
console.log(v1);
let obj1={x:10};
let obj2={y:20};
let merged=Object.assign({},obj1,obj2);
console.log(merged);



