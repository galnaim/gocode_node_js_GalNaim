import "./App.css";
import Header from "./cmps/header/header.js/Header";
import Products from "./cmps/products/Products";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((InisialProductsArray) => {setData(InisialProductsArray) ; setFixedArray(InisialProductsArray)});
  }, []);

  const [fixedArray, setFixedArray] = useState([]);
  const [Data, setData] = useState([]);

  let categories = fixedArray.map((p) => p.category).filter(
    (value, index, array) => array.indexOf(value) === index
  );

  function ViewFilter(selectedCategory) {
    const filteredview = fixedArray.filter((item) =>
      item.category === selectedCategory
        ? item.category
        : selectedCategory === "--Choose an option--"
    );
    setData(filteredview);
  }

  return (
    <div className="App">
      {/* <Button/> */}
      <h1>Jackets</h1>
      <Header
        Data={Data}
        ViewFilter={ViewFilter}
        setData={setData}
        categories={categories}
        fixedArray={fixedArray}
      />
      <Products ProductArr={Data} fixedArray={fixedArray}/>
    </div>
  );
}
export default App;
