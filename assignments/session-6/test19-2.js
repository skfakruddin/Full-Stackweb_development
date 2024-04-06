let stu={
    name:'fakruddin',
    age:18,
    marks:[10,20,30,40,50],

    address:{
        street:'1st main',
        city:'vjayawada',
        state:'Andhra Pradesh',
    },
    getmarks:function(){
        console.log('The marks of the student are:',this.marks);
    },
     };
     console.log(stu);
     stu.getmarks();

  