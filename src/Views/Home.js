import Header from "../cmps/header/Header";
import ProductContext from "../contexts/ProductContext";
import Cart from "../cmps/Cart/Cart";
import LoadingSpinner from "../cmps/LoadingSpinner/LoadingSpinner";
import React, { useEffect, useState } from "react";
import Products from "../cmps/products/Products";
import { Link } from "react-router-dom";

function Home() {
  const [fixedArray, setFixedArray] = useState([]);
  const [changeableProductsArray, setChangeableProductsArray] = useState([]);
  const [didItLoad, setdidItLoad] = useState(false);
  const [CartArray, setCartArray] = useState([]);
  const [value, setValue] = useState([100, 900]);
  const [extremePrices, setExtremePrices] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resi) => resi.json())
      .then((InitialProductsArray) => {
        setChangeableProductsArray(InitialProductsArray);
        setFixedArray(InitialProductsArray);
        setdidItLoad(true);
        findExtremePrices(InitialProductsArray);
        // setValue(extremePrices);
      })
      .catch(function () {
        <h1>No Answer from Server</h1>;
        console.log("Error");
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

  function findExtremePrices(arr) {
    const sortPrices = arr.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      } else {
        return 0;
      }
    });
    setExtremePrices([sortPrices[0], sortPrices[sortPrices.length - 1]]);
  }

  function adjustFiltereBySlide(valueFromSlide) {
    let viewFilterBySlide = fixedArray.filter(function (item) {
      if (valueFromSlide[0] < item.price && item.price < valueFromSlide[1])
        return true;
      else return false;
    });
    setChangeableProductsArray(viewFilterBySlide);
    console.log("viewFilterBySlide", viewFilterBySlide);
  }

  function addToCart(id) {
    let increasingCartArray = [
      ...CartArray,
      fixedArray.find(function (item) {
        return item.id === id;
      }),
    ];
    setCartArray(increasingCartArray);
  }

  function removeFromCart(id) {
    let decreasingCartArray = CartArray.filter(function (product) {
      return product.id !== id;
    });
    setCartArray(decreasingCartArray);
  }

  function emptyCart() {
    setCartArray([]);
  }

  return (
    <ProductContext.Provider
      value={{
        fixedArray: fixedArray,
        CartArray: CartArray,
        setCartArray: setCartArray,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        emptyCart: emptyCart,
      }}
    >
      {didItLoad === true ? (
        <>
          <h1>Jackets</h1>
          <Cart />
          <div className="App">
            <Header
              ViewFiltered={ViewFiltered}
              categories={categories}
              fixedArray={fixedArray}
              setValue={setValue}
              value={value}
              leastExpensiveObj={extremePrices[0].price}
              mostExpensiveObj={extremePrices[1].price}
              adjustFiltereBySlide={adjustFiltereBySlide}
            />
            <Products
              changeableProductsArray={changeableProductsArray}
              fixedArray={fixedArray}
            />
            <Link className="aboutLink" to="/about">
              about
            </Link>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </ProductContext.Provider>
  );
}
export default Home;
