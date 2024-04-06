
let studentMarks = [
    { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},
    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},
    { name:"kiran", marks:{ maths: 50, physics : 82 , chemistry :94}},
];
let hmm=0,hpm=0,hcm=0;
let hms=" ",hps="  ",hcs=" ";
studentMarks.forEach(function(value){
    if(value.marks.maths>hmm){
        hmm=value.marks.maths;
        hms=value.name;
    }
    if(value.marks.physics>hpm){
        hpm=value.marks.physics;
        hps=value.name;
    }
    if(value.marks.chemistry>hcm){
        hcm=value.marks.chemistry;
        hcs=value.name;
    }
})
console.log("The student with highest marks in maths is:",hms);
console.log("The student with highest marks in physics is:",hps);
console.log("The student with highest marks in chemistry is:",hcs);



