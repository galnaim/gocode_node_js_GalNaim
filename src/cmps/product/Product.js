import "./Product.css";
import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductCard = ({ title, image, price, category, id }) => {
  const [value, setValue] = React.useState(2);
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="product-card">
      <Link to={`/Products/${id}`}>
        <div className="product-image">
          <img src={image} width="90px" alt="Sorry, No Pic..." />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
        </div>
      </Link>
      <div className="product-info">
        <h6>{price}</h6>
        <h6>{category}</h6>
      </div>
      <div className="addButton">
        <button
          onClick={() => {
            addToCart(id);
          }}
        >
          {" "}
          Add To Cart{" "}
        </button>
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
