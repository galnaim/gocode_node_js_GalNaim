import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { CartArray, removeFromCart, emptyCart } = useContext(ProductContext);
  return (
    <div className="Cart">

      <h3>Cart</h3>
      {CartArray.map((item) => (
        <React.Fragment key={item.id}>
          <div id={item.id} value={item.title}>
            {item.title}
          </div>
          <button
            id={item.id}
            value={item.title}
            onClick={() => removeFromCart(item.id)}
          >
            Remove From Cart{" "}
          </button>
        </React.Fragment>
                  
      ))}
      <br/>
      <button onClick={() => emptyCart()}>
            Empty Cart
          </button>
    </div>
  );
};
export default Cart;
