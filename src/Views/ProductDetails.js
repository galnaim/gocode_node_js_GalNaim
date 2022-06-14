import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

export default function ProductDetails() {
  const { itemNum } = useParams();
  const {product, setproduct} = useState({});

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${itemNum}`)
    .then((res) => res.jason())
    .then((product) => setproduct(product));
})
  return <h1>Title</h1>;
}

// const ProductDetails = () => {
//   return <h1>TITLE</h1>;
// };
// export default ProductDetails;
