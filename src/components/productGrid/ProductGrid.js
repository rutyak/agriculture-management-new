import React from "react";
import "./ProductGrid.css"; 

const products = [
  {
    title: "Room Sprays",
    image: "https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg",
  },
  {
    title: "Incense",
    image: "https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg",
  },
  {
    title: "Candles",
    image: "https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg",
  },
  {
    title: "Oil Burner Blends",
    image: "https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg",
  },
  {
    title: "Design Objects",
    image: "https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg",
  },
  {
    title: "Bathroom Deodorisers & Pets",
    image: "https://www.aesop.com/u1nb1km7t5q7/2NNTAzsI2IWITVraRJ8YIl/337f028f7de22f97ab7cc8cd14f2f13f/Aesop_Category_Page_Secondary_2_Incense_3_Mid_Desktop_2560x1440px.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="product-page">
      <h1>Browse by product type</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="productype-card">
            <img src={product.image} alt={product.title} />
            <div className="product-title">{product.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
