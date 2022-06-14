import "./App.css";
import Header from "./cmps/header/header.js/Header";
import Products from "./cmps/products/Products";
import React, { useEffect, useState, useContext } from "react";
import LoadingSpinner from "./cmps/LoadingSpinner/LoadingSpinner";
import Cart from "./cmps/Cart/Cart";
import ProductContext from "./contexts/ProductContext";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./Views/ProductDetails";
import About from "./Views/About";

function App() {
  const [fixedArray, setFixedArray] = useState([]);
  const [changeableProductsArray, setChangeableProductsArray] = useState([]);
  const [didItLoad, setdidItLoad] = useState([false]);
  const [CartArray, setCartArray] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resi) => resi.json())
      .then((InisialProductsArray) => {
        setChangeableProductsArray(InisialProductsArray);
        setFixedArray(InisialProductsArray);
        setdidItLoad(true);
      });
  }, []);

  let categories = fixedArray
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  function ViewFiltered(selectedCategory) {
    const filteredview = fixedArray.filter((item) =>
      item.category === selectedCategory
        ? item.category
        : selectedCategory === "--Choose an option--"
    );
    setChangeableProductsArray(filteredview);
  }

  function addToCart(id) {
    let increasingCartArray = [
      ...CartArray,
      fixedArray.find(function(item) {
        return item.id === id;
      }),
    ];
    setCartArray(increasingCartArray);
  }

  function removeFromCart(id) {
    let decreasingCartArray = CartArray.filter(function(product) {
      return product.id !== id;
    });
    setCartArray(decreasingCartArray);
  }

  return (
    <ProductContext.Provider
      value={{
        fixedArray: fixedArray,
        CartArray: CartArray,
        setCartArray: setCartArray,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {didItLoad === true ? (
        <>
          <Link to="/ProductDetails">details</Link><br/>
          <Link to="/about">about</Link>
<Routes>
      <Route path="about" element={<About/>} />

      <Route path="ProductDetails/:itemNum" element={<ProductDetails/>} />
</Routes>

          <h1>Jackets</h1>

          <Cart />

          <div className="App">
            <Header ViewFiltered={ViewFiltered} categories={categories} />
            <Products
              changeableProductsArray={changeableProductsArray}
              didItLoad={didItLoad}
            />
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </ProductContext.Provider>
  );
}
export default App;
