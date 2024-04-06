class Student{
    constructor(sno,sname,city)
    {
        this.sno=sno;
        this.sname=sname;
        this.city=city;
    }
    getstudent()
    {
        console.log('Sno:',this.sno,"name:",this.sname,"city:",this.city);
    }
}
let std1=new Student(1,'fakruddin','bangalore');
let std2=new Student(2,'vignesh','chennai');
let std3=new Student(3,'aditya','hyderabad');
std1.getstudent();
std2.getstudent();
std3.getstudent();



class College {
    constructor(cn,city){
        this.cn=cn;
        this.city=city;
    }
}
class Stu extends College{
    constructor(cn,city,sno,sname)
    {
        super(cn,city);
        this.sno=sno;
        this.sname=sname;
    }
}
let st1=new Stu('PVPSIT','Vijayawada',1,'fakruddin');
console.log(st1);