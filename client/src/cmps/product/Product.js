import "./Product.css";
import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardHeader, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductCard = ({ title, image, price, category, id }) => {
  const { CartArray, addToCart, removeFromCart } = useContext(ProductContext);

  const isInCart = CartArray.find(function (item) {
    return item.id === id;
  });

  return (
    <Card elevation={10} sx={{ maxWidth: 200, margin: 0.3 }}>
      <Link to={`/Products/${id}`}>
        <CardHeader title={title} subheader={category} />
      </Link>

      <div className="product-card">
        <Link to={`/Products/${id}`}>
          <CardMedia component="img" height="150" image={image} alt={title} />

          <div className="product-info"></div>
        </Link>
        <CardContent className="ABC">
          <Typography className="DEF">
            <div className="product-info">
              <h6>Price: {price} $</h6>
            </div>
            <div className="addButtondiv">
              {isInCart ? (
                <div className="toCenter">
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
                  <button
                    className="addButton"
                    onClick={() => {
                      removeFromCart(id);
                    }}
                  >
                    {" "}
                    Remove From Cart{" "}
                  </button>
                </div>
              ) : (
                <div className="toCenter">
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

              <br />
            </div>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
export default ProductCard;
