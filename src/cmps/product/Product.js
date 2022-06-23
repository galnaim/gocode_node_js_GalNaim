import "./Product.css";
import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
// import Rating from "@mui/material/Rating";
// import Cart from "../Cart/Cart";

const ProductCard = ({ title, image, price, category, id }) => {
  const { CartArray, addToCart } = useContext(ProductContext);

  const isInCart = CartArray.find(function (item) {
    return item.id === id;
  });

  return (
    <div className="product-card">
      <Link to={`/Products/${id}`}>
        <div className="product-image">
          <img src={image} width="90px" alt={title} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
        </div>
      </Link>
      <div className="product-info">
        <h6>{price}</h6>
        <h6>{category}</h6>
      </div>
      <div className="addButtondiv">
        {isInCart ? (
          <div>
          <button
            className="addButton"
            onClick={() => {
              addToCart(id);
            }}
          >
            {" "}
            Add More To Cart{" "}
          </button>
          <div>{isInCart.qty} are in your cart</div>
          </div>
        ) : (
          <div>
          <button
            className="addButton"
            onClick={() => {
              addToCart(id);
            }}
          >
            {" "}
            Add To Cart{" "}
          </button>
          <div>0 are in your cart</div>
          </div>
        )}

        {/* <button
          className="addButton"
          onClick={() => {
            addToCart(id);
          }}
        >
          {" "}
          Add To Cart{" "}
        </button> */}
        <br />
        {/* <Rating
          max={10}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> */}
      </div>
    </div>
  );
};
export default ProductCard;
