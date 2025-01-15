import React from "react";
import "./AromasSection.css";

const products = [
  {
    name: "Kagerou Aromatique Incense",
    description: "Green, herbaceous, woody",
    quantity: "33 sticks",
    price: "$310.00",
    image:
      "https://www.aesop.com/u1nb1km7t5q7/72xUYdTmDruE7obMZczysX/d7cb72793b04ed3c2f8e901375c66e7c/Aesop_Home_Sarashina_Aromatique_Incense_Web_Front_A_Large_1800x1573px.png",
  },
  {
    name: "Sarashina Aromatique Incense",
    description: "Woody, warm, sweet",
    quantity: "33 sticks",
    price: "$310.00",
    image:
      "https://www.aesop.com/u1nb1km7t5q7/72xUYdTmDruE7obMZczysX/d7cb72793b04ed3c2f8e901375c66e7c/Aesop_Home_Sarashina_Aromatique_Incense_Web_Front_A_Large_1800x1573px.png",
  },
  {
    name: "Murasaki Aromatique Incense",
    description: "Woody, spicy, resinous",
    quantity: "33 sticks",
    price: "$310.00",
    image:
      "https://www.aesop.com/u1nb1km7t5q7/gK70UK0cUqX2HjWYYEADL/5bb0fa22d0433792cac699241bbfaeae/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Front_Large_1800x1573px.png",
  },
];

const Card = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-quantity">{product.quantity}</p>
    <p className="product-price">{product.price}</p>
  </div>
);

const AromasSection = ({title}) => {
  return (
    <div className={title? " ":"aromas-product-container"}>
      { !title && <div className="aromas-container">
        <div className="text-section">
          <p className="small-text">Recent addition</p>
          <h1 className="title-text">A trio of evocative aromas</h1>
          <p className="description-text">
            Our Aromatique Incense have a unique square profile and are made
            without a bamboo core for a gentle burn.
          </p>
        </div>
        <div className="image-section">
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/2BDKvIPLknaHx7vy1fMVJ8/5312f87043bf325ed66d0bc1478b1fb5/Aesop_Category_Page_Secondary_2_Incense_1_Mid_Desktop_2560x1440px.jpg"
            alt="Aromatique Incense"
          />
        </div>
      </div>}
      { title && <div className="title-productcard">{title}</div>}
      <div className="product-page">
        <div className="product-grid">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AromasSection;
