import Header from "../cmps/header/Header";
import ProductContext from "../contexts/ProductContext";
import Cart from "../cmps/Cart/Cart";
import LoadingSpinner from "../cmps/LoadingSpinner/LoadingSpinner";
import React, { useEffect, useState } from "react";
import Products from "../cmps/products/Products";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../cmps/TemporaryDrawer/TemporaryDrawer";

function Home() {
  const [fixedArray, setFixedArray] = useState([]);
  const [changeableProductsArray, setChangeableProductsArray] = useState([]);
  const [didItLoad, setdidItLoad] = useState(false);
  const [CartArray, setCartArray] = useState([]);
  const [value, setValue] = useState([7 , 1000]);
  const [extremePrices, setExtremePrices] = useState();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((InitialProductsArray) => {
        setChangeableProductsArray(InitialProductsArray);
        setFixedArray(InitialProductsArray);
        setdidItLoad(true);
        findExtremePrices(InitialProductsArray);

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
      if (valueFromSlide[0] <= item.price && item.price <= valueFromSlide[1])
        return true;
      else return false;
    });
    setChangeableProductsArray(viewFilterBySlide);
  }

  function addToCart(id) {
    const product = CartArray.find(function (item) {
      return item.id === id;
    });

    if (product !== undefined) {
      const newCartArray = CartArray.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            qty: prod.qty + 1,
          };
        }
        return prod;
      });
      setCartArray(newCartArray);
    } else {
      const initialProduct = fixedArray.find(function (item) {
        return item.id === id;
      });
      setCartArray([...CartArray, { ...initialProduct, qty: 1 }]);
    }
  }

  function removeFromCart(id) {
    let decreasingCartArray = CartArray.find(function (product) {
      return product.id === id;
    });
    if (decreasingCartArray && decreasingCartArray.qty === 1) {
      setCartArray(
        CartArray.filter(function (product) {
          return product.id !== id;
        })
      );
    } 
    
    else if (decreasingCartArray) {
      setCartArray(
        CartArray.map(function (product) {
          if (product.id !== id){return product}
          else {return {...product, qty: (product.qty -1)}}
          })
        )
    } 
    
    else {
      setCartArray(CartArray);
    }
  }

  function emptyCart() {
    setCartArray([]);
  }

  // useEffect(()=> console.log('CartArray', CartArray),[CartArray])

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
          <TemporaryDrawer />
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
              CartArray={CartArray}
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
