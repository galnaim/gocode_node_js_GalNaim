import "./Products.css";
import ProductCard from "../product/Product";
import HeadertoProducts from "../../contexts/HeaderToHome";
import React, { useContext } from "react";
// import ProductContext from "../../contexts/ProductContext";
// import { useContext } from "react";

const Products = ({ CartArray, changeableProductsArray }) => {
  return (
    <div>
      <section className="products">
        {changeableProductsArray.map((item) => (
          <ProductCard
            key={item.id}
            id={item._id}
            title={item.title}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
