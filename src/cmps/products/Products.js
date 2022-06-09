
import "./Products.css"
import ProductCard from "../product/Product";

const Products = ({ProductArr , fixedArray}) => {
    return (
      <section className="products">
        {fixedArray.length>0
        ?
      ProductArr.map((lowerCasepruduct)=>(
       <ProductCard key={lowerCasepruduct.id} id={lowerCasepruduct.id} title={lowerCasepruduct.title} price={lowerCasepruduct.price} image={lowerCasepruduct.image} category={lowerCasepruduct.category}/>
       ))
      : <img src="https://shalomhanoch.co.il/wp-content/uploads/2015/08/00263012CBS.jpg" alt="please wait..."/>}
      
      </section>
    );
  };

  export default Products;

  