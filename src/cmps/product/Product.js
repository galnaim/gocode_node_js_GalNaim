import "./Product.css";
import { useContext, useRef } from "react";
import ProductContext from "../../contexts/ProductContext";

const ProductCard = ({ title, image, price, category, id }) => {
// const counter = useRef(0);
const {addToCart} = useContext(ProductContext)

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} width="100px" alt="Sorry, No Pic..." />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <button
          onClick={() => {
            addToCart(id);}}>{" "}+{" "}
        </button>
        <h6>{category}</h6>
      </div>
    </div>
  );
};
export default ProductCard;
