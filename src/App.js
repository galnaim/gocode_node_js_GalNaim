import "./App.css";
import Header from "./cmps/header/header.js/Header";
import Products from "./cmps/products/Products";
import { useEffect, useState } from "react";
import LoadingSpinner from "./cmps/LoadingSpinner/LoadingSpinner";
import Cart from "./cmps/Cart/Cart";
import ProductContext from "./contexts/ProductContext";

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

  // function fetchAgain() {
  //   setdidItLoad(false);
  //   fetch("https://fakestoreapi.com/products")
  //     .then((resi) => resi.json())
  //     .then((InisialProductsArray) => {
  //       setChangeableProductsArray(InisialProductsArray);
  //       setFixedArray(InisialProductsArray);
  //       setdidItLoad(true);
  //     });
  // }

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
    const increasingCartArray = ([...CartArray, fixedArray.filter((item)=>(
      item.id === id))]);
    setCartArray(increasingCartArray);
  }

function removeFromCart(id){
  const decreasingCartArray = CartArray.filter((product)=>product.id!==id);
  console.log(decreasingCartArray);
  setCartArray(decreasingCartArray);
}

  return (
    <ProductContext.Provider
      value={{
        fixedArray: fixedArray,
        CartArray: CartArray,
        setCartArray: setCartArray,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      }}
    >
      {didItLoad ?

      
      <>
      <h1>Jackets</h1>

      <Cart />
      <LoadingSpinner/>
      <div className="App">
        
          <Header
            ViewFiltered={ViewFiltered}
            categories={categories}
            // fetchAgain={fetchAgain}
          />
          <Products
            changeableProductsArray={changeableProductsArray}
            didItLoad={didItLoad}
          />
        </div>
      </>
      :
      <img src="https://upload.wikimedia.org/wikipedia/he/thumb/f/f1/Mossad.JPG/450px-Mossad.JPG" alt="dfg"/>
            // <LoadingSpinner/>
}
</ProductContext.Provider>
  );
}
export default App;
