

class Product{
    constructor(brand, price,modal){
        this.brand = brand;
        this.price = price;
        this.modal = modal;
        Product.prototype.getDiscountedPrice=function(d){
            console.log("Discounted Price : ",this.price*d/100)
        }
        }
    }  
let p1 = new Product('Apple', 70000,'iphone 15');
console.log("Brand : ",p1.brand);
console.log("Price : ",p1.price);
console.log("Model : ",p1.modal);
p1.getDiscountedPrice(20);
let p2 = new Product('Samsung', 70000,'Galaxy S23');
console.log("Brand : ",p2.brand);
console.log("Price : ",p2.price);
console.log("Model : ",p2.modal);
p2.getDiscountedPrice(20);
let p3 = new Product('Oneplus', 50000,'Oneplus 12R');
console.log("Brand : ",p3.brand);
console.log("Price : ",p3.price);
console.log("Model : ",p3.modal);
p3.getDiscountedPrice(25);
let p4 = new Product('Realme', 40000,'Realme 12 pro');
console.log("Brand : ",p4.brand);
console.log("Price : ",p4.price);
console.log("Model : ",p4.modal);
p4.getDiscountedPrice(30);
let p5 = new Product('Vivo', 30000,'Vivo V30');
console.log("Brand : ",p5.brand);
console.log("Price : ",p5.price);
console.log("Model : ",p5.modal);
p5.getDiscountedPrice(10);



