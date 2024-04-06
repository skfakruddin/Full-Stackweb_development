let product={
    name:'HP Pavilion ed-2006',
    price:70000,
    color:'silver',
    processor:'Ryzen 5',
    ram:'16gb',
    storage:'512GB SSD',
    display:'15 inch FHD',
    getdiscount:function(d){
        console.log('The discount price for the product is:',this.price*d/100);
    }
 }
    console.log(product);
    product.getdiscount(10);