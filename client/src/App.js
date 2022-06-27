import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Views/ProductDetails";
import About from "./Views/About";
import Home from "./Views/Home";

function App() {


  return (
    <React.Fragment>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Products/:dynamicProductID"
            element={<ProductDetails />}
          />
          <Route path="about" element={<About />} />
        </Routes>
      </>
    </React.Fragment>
  );
}
export default App;
