import React from 'react';
import './ArticleCard.css';

const articles = [
  {
    category: 'Habitat',
    title: 'A guide to home fragrance',
    readTime: 'Five-minute read',
    image: 'https://www.aesop.com/u1nb1km7t5q7/3iVQMxKkOpQCyAOyQJHZkj/17ea0331c38082dd63d09651d2f222ce/Aesop_Scented_Home_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg', 
  },
  {
    category: 'Culture',
    title: 'Sensorialist Literature',
    readTime: 'Three-minute read',
    image: 'https://www.aesop.com/u1nb1km7t5q7/5nFKi3yzSpbDvmkLMzi9AE/3491b9035d596121a695f4b03b7f728a/Aesop_Sensorialist_Literature_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg', 
  },
  {
    category: 'Architecture',
    title: 'Objects of inspiration',
    readTime: 'Three-minute read',
    image: 'https://www.aesop.com/u1nb1km7t5q7/68MBZEQhhLNpIBDowE4UEE/b6060761fff9e9496a05e0be1aa73fb6/Aesop_Rozu_Pernette_Perriand_Interview_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg', // Replace with actual image path
  },
];

const Card = ({ article }) => (
  <div className="article-card">
    <img src={article.image} alt={article.title} className="article-image" />
    <div className="article-content">
      <p className="article-category">{article.category} •</p>
      <hr></hr>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-read-time">{article.readTime}</p>
    </div>
  </div>
);

const ArticleCard = () => (
  <div className="article-page">
    <div className="article-grid">
      {articles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  </div>
);

export default ArticleCard;
