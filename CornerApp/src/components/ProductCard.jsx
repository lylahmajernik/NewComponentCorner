import './ProductCard.css'
function ProductCard({ name, image, price, info }) {
  return (
    <div className="product-card">
      <div className="Product-header">
        <img 
          src={image}
          alt="Product Image" 
          className="image"
        />
        <div className="name">
          <h3 className="name">{name}</h3>
        </div>
        <div className="price">
          <h3 className="price">{price}</h3>
        </div>
        <div className="info">
          <h3 className="info">{info}</h3>
        </div>
    </div>
    </div>
  );
}

export default ProductCard;