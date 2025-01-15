import React from 'react';
import './ProductDetails.css';

function ProductDetails() {
  return (
    <div className="productdeatails-container">
      <div className="text-content">
        <p className="subtitle">Recently returned</p>
        <h1 className="title">Post-Poo Drops</h1>
        <p className="description">
          After a brief hiatus, our sought-after toilet deodoriser has returned—now in updated packaging.
        </p>
        <button className="cta-button">
          Discover Post-Poo Drops <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
