let data=10;
let datacopy=data;
console.log(data);
console.log(datacopy);
data=20;
console.log(data);
let test={
    a:10,
    b:20
}
let testcopy={...test};
console.log("Test:",test);
console.log("TestCopy:",testcopy);
test.a=50;
console.log("Test:",test);
 console.log("TestCopy:",testcopy);