import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-card-image" src={product.imgSrc} alt={product.title} />
      <div className="product-card-content">
        <h2 className="product-card-title">{product.title}</h2>
        <p className="product-card-description">{product.description}</p>
        <button className="product-card-button">View Details</button>
      </div>
    </div>
    
  );
};

export default ProductCard;
