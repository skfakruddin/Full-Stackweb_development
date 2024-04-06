let studentCollegeDetails={
    collegeName:'PVPSIT',
    collegeLocation:'Vijayawada',
    collegeCode:517102
   
};
let s1={
    sno:1,
    sname:'fakruddin'
   
}
let s2={
    sno:2,
    sname:'vignesh'
   
}
let s3={
   sno:3,
    sname:'aditya'
}
Object.setPrototypeOf(s1,studentCollegeDetails);
console.log(s1);
console.log(s1.collegeName);
console.log(s1.collegeLocation);
Object.setPrototypeOf(s2,studentCollegeDetails);
console.log(s2);
console.log(s2.collegeName);
console.log(s2.collegeLocation);
Object.setPrototypeOf(s3,studentCollegeDetails);
console.log(s3);
console.log(s3.collegeName);
console.log(s3.collegeLocation);


