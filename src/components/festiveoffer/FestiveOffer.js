import React from "react";
import "./FestiveOffer.css";

const FestiveOffer = () => {
  return (
    <div className="festive-container">
      <div className="image-section">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/23mX2EVjoEY3EflqXW2ajg/7fb9b7d000b8cdb875fd12bbb5ad95b0/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg" 
          alt="Festive Gift"
        />
      </div>
      <div className="text-section">
        <p className="small-text">A festive gesture</p>
        <h1 className="title-text">
          Receive a complimentary festive sleeve
        </h1>
        <p className="description-text">
          After determining the products most suited to your dear ones, select
          the ‘gift order’ option at checkout and receive a specially designed
          gift sleeve.
        </p>
      </div>
    </div>
  );
};

export default FestiveOffer;
