import React, { useEffect } from 'react'
import  {useState} from 'react'
import Product from '../product/Product'
function Products() {
  let [products,setProducts]=useState([]);
  async function getProducts(){
    let res= await fetch(' http://localhost:3000/products');
      let productsData =await res.json();
      setProducts(productsData)
  }
  useEffect( ()=> {
    getProducts();
  
  },[]) 
  return (
    <div>
      <h1 className='text-center display-3'>Products</h1>
      <div className='row row-cols-1  row-cols-sm-2 row-cols-md-3'>
        {products.map((productObj)=>
        (
           <div>
            <Product productObj={productObj} />
           </div>
        ))}
      
      </div>
    </div>
  )
}

export default Products