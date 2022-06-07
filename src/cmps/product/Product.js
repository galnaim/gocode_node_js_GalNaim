import "./Product.css";
const ProductCard = ({ title, image, price, category }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} width="100px" alt="Sorry, No Pic..." />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <h6>{category}</h6>
      </div>
    </div>
  );
};
export default ProductCard;
