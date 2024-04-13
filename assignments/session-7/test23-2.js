
import employees from  './test23-1.js'
console.log(employees)
console.log(" 1. Find the names(array of names) of employees of Hyderabad");
let namesOfHyderabadEmployees = employees.filter(function(emp){
    if(emp.address.city === 'hyderabad'){
        return emp.name
    }
   })
   for(let i=0;i<namesOfHyderabadEmployees.length;i++){
    console.log(namesOfHyderabadEmployees[i].name)
   }
   console.log(" 2. Find the names(array of names) of employees whose age is between 40 and 50");
let agebtw=employees.filter(function(emp){
    if(emp.age>=40 && emp.age<=50){
        return emp.name
    }
})
for(let i=0;i<agebtw.length;i++){
    console.log(agebtw[i].name,agebtw[i].address)
}
console.log("3. Find the employees who are not from Hyderabad");
let notHyderabadEmployees = employees.filter(function(emp){
    if(emp.address.city !== 'hyderabad'){
        return emp.name
    }
})
console.log(notHyderabadEmployees)
console.log(" 4. Find the names(array of names) of employees who knows reactjs");
let reactJSknownEmployees=employees.filter(function(emp){
    if(emp.skills.includes('reactjs')){
        return emp.name
    }
}
)
let array=[];
for(let i=0;i<reactJSknownEmployees.length;i++){
    array.push(reactJSknownEmployees[i].name)
}
console.log(array)