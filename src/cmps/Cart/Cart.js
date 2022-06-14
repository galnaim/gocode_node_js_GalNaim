import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import "./Cart.css"

const Cart = () => {
  const { CartArray, removeFromCart } = useContext(ProductContext);
  return (
    <div className="Cart">
      <h2>Cart</h2>
      {CartArray.map((item) => (
        <>
          <li key={item.id} id={item.id} value={item.title}>
            {item.title}
          </li>
          <button
            key={item.id}
            id={item.id}
            value={item.title}
            onClick={() => removeFromCart(item.id)}
          >
            Remove From Cart{" "}
          </button>
        </>
      ))}
    </div>
  );
};
export default Cart;
