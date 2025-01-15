import React from "react";
import "./ProductHighlight.css";

const ProductHighlight = () => {
  return (
    <div className="highlight-section">
      <div className="highlight-left">
        <div className="highlight-text">
          <h1 className="highlight-title">A weighty companion</h1>
          <p className="highlight-description">
            Designed for Aesop by Vogel Studio, the asymmetrical Bronze Incense
            Holder is a complementary addition to any table-setting, hearth or
            bookshelf.
          </p>
        </div>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg"
            alt="Incense Holder on Table"
            className="highlight-main-image"
          />
      </div>
      <div className="highlight-right">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6XK2lvnK9rno0Keq5zyYVB/b9f6917829d091f3ea55b207b3138f8b/Aesop_Home_Bronze_Incense_Holder_Web_Front_A_Large_1800x752px.png"
              alt="Bronze Incense Holder"
              className="highlight-holder-image"
            />
            <div className="highlight-details">
              <h2 className="holder-title">Bronze Incense Holder</h2>
              <p className="holder-subtitle">
                Designed for Aesop by Vogel Studio
              </p>
              <p className="holder-dimensions">90 mm x 145 mm x 34 mm</p>
              <p className="holder-price">$1,200.00</p>
            </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
