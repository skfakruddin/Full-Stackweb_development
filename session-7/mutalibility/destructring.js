//packing
let us=["ravi","teja"];
//unpacking
let [name,surname]=us;
console.log(name);
//destructure the array
let n=["ravi","teja"];
let [name1,name2]=n;
console.log(name1);
console.log(name2);

let product={
    pid:100,
    name:'tv',
    brand:'sony'
}
let {pid,brand}=product;
console.log(pid);
console.log(brand);