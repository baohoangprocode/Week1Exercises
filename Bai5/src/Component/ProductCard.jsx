import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img className="card-img" src={product.image} alt={product.name} />
      <h3 className="card-title">{product.name}</h3>
      <p className="card-price">{product.price}</p>
      <button className="card-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;
