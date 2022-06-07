
import "./Products.css"
import ProductCard from "../product/Product";

const Products = ({ProductArr}) => {





    return (
      <section className="products">
      {ProductArr.map((lowerCasepruduct)=>(
       <ProductCard key={lowerCasepruduct.id} id={lowerCasepruduct.id} title={lowerCasepruduct.title} price={lowerCasepruduct.price} image={lowerCasepruduct.image} category={lowerCasepruduct.category}/>
       ))};
      </section>
    );
  };

  export default Products;

  