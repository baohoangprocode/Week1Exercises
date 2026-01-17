import React from "react";
import "./ProductCard.css";
import ProductImg from "../../assets/Image/Image72.png";

const ProductCard = () => {
  return (
    <div className="pc-box">
      <div className="pc-img-box">
        <img className="pc-img" src={ProductImg} alt="Product" />
      </div>
      <h1 className="pc-name">Spaghetti</h1>
      <h3 className="pc-price">$35.3</h3>
      <button className="common-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
