class Employee{
    constructor(name, age,basic){
        this.name = name;
        this.age = age;
        this.basic = basic;
        Employee.prototype.getSalary=function(){
            return this.basic*2}
        }
    }
  let emp1 = new Employee('Fakruddin', 18, 200000);
emp1.getSalary();
console.log(emp1); 
console.log("employee salary:",emp1.getSalary());
let emp2 = new Employee('vignesh', 20, 300000);
emp2.getSalary();
console.log(emp2);
console.log("employee salary:",emp2.getSalary());
let emp3 = new Employee('aditya', 20, 400000);
emp3.getSalary();
console.log(emp3);
console.log("employee salary:",emp3.getSalary());
let emp4 = new Employee('susruth', 20, 500000);
emp4.getSalary();
console.log(emp4);
console.log("employee salary:",emp4.getSalary());
let emp5 = new Employee('chaitanya', 20, 600000);
emp5.getSalary();
console.log(emp5);
console.log("employee salary:",emp5.getSalary());