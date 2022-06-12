import { useContext, useRef } from "react";
import ProductContext from "../../contexts/ProductContext";

const Cart = () => {
    const counter = useRef(0);
  const { CartArray, removeFromCart } = useContext(ProductContext);
return (

            <div>

                <h2>Your Cart</h2>

                {CartArray.map((item) => 
                (
                <li key={counter.current++} id={counter.current++} value={item.title}>
                {item[0].title}</li>                         
                // <button key={counter.current++} id={counter.current++} value={item.title} onClick={()=>removeFromCart(counter.current++)}>
                // {item[0].title} </button>
                )
                )}
               
            </div>
       );
     };

export default Cart;
