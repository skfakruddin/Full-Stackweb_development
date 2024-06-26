import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { MdDelete } from "react-icons/md";

import "./Cart.css";

function Cart() {
  let { currentUser } = useContext(userLoginContext);
  let [cartItems, setCartItems] = useState([]);

  async function getProductsOfUserCart() {
    let res = await fetch(
      `http://localhost:3000/user-cart?username=${currentUser.username}`
    );
    console.log(res);
    let cartItemsList = await res.json();
    setCartItems(cartItemsList);
  }

  //delete produt from cart
   async function deleteProduct(productId){
    let res = await fetch(`http://localhost:3000/user-cart/${productId}`,{
      method: 'DELETE'
    })
    console.log(res)   
      getProductsOfUserCart();
     }
   

  useEffect(() => {
    getProductsOfUserCart();
  }, []);

  return (
    <div className="container">
      {cartItems.length === 0 ? (
        <p className="display-1 text-center text-danger">Cart is empty</p>
      ) : (
       
        cartItems.map((cartItem) => (
          <div className="card-box">
          <div key={cartItem.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{cartItem.title}</h5>
              <p className="card-text">{cartItem.description}</p>
              <p className="card-text">{cartItem.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => deleteProduct(cartItem.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
          </div>
        ))  
      )}
    </div>
  );
}

export default Cart;