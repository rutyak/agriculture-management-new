import React from "react";
import "./Carousal.css";

function Carousal() {
  return (
    <div className="container">
      <div className="left-section">
        <h3 className="subheading">Skin Care+</h3>
        <h1 className="heading">Intensive formulations for complex skin</h1>
        <p className="description">
          Explore products formulated with mature skin and urban dwellers in
          mind, to provide daily hydration and the additional benefit of potent
          vitamins and anti-oxidants.
        </p>
        <a href="/" className="browse-link">
          Browse formulations <span className="arrow">→</span>
        </a>
      </div>
      <div className="right-section">
        <div className="product">
          <img src="" alt="Immaculate Facial Tonic" />
          <h4 className="product-title">Brilliant Performers Duo</h4>
          <p className="product-description">
            Synchronised support to refine and replenish the skin
          </p>
        </div>
        <div className="product">
          <img src="" alt="Lucent Facial Concentrate" />
          <h4 className="product-title">Lucent Facial Concentrate</h4>
          <p className="product-description">
            A Vitamin C-rich layering serum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
