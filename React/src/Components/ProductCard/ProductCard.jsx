import React from "react";
import "./ProductCard.css";
import ProductImg from "../../assets/Image/Image72.png";
import Button from "../Button/Button";

const ProductCard = ({name, price, buttonType}) => {
  return (
    <div className="pc-box">
      <div className="pc-img-box">
        <img className="pc-img" src={ProductImg} alt="Product" />
      </div>
      <h1 className="pc-name">{name}</h1>
      <h3 className="pc-price">{price}</h3>
      <Button type={buttonType} />
    </div>
  );
};

export default ProductCard;
