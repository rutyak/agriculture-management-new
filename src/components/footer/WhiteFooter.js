import React from "react";
import "./WhiteFooter.css";

const features = [
  {
    icon: "https://www.aesop.com/u1nb1km7t5q7/3ZHAFYCvLBqAKjXfINVH1q/acff0cee6551b41d62d3a75c1e9c2780/droplet.svg", 
    title: "Samples with every order",
    description:
      "It is a pleasure to offer a selection of complimentary samples at checkout.",
  },
  {
    icon: "https://www.aesop.com/u1nb1km7t5q7/43IddlTkgRxqtb1tsYSnn2/7a024144c4fec17cf6baefd1dded7410/red_envelope_ovp.svg", 
    title: "Red threads of prosperity",
    description:
      "Until 29 January, receive complimentary red envelopes with purchases over HKD 900 by entering NY25 at checkout.",
  },
  {
    icon: "https://www.aesop.com/u1nb1km7t5q7/4Wb7WJo1Hhqg95v6CZKEE9/5e8d64187475757f59138ba10479b51a/chat-bubble.svg", 
    title: "Speak with a consultant",
    description:
      "Our knowledgeable consultants are available online 24 hours a day to offer product and order assistance.",
  },
];

const FeatureCard = ({ feature }) => (
  <div className="feature-card">
    <img
      className="feature-icon"
      src={feature.icon}
      alt={feature.title}
    />
    <h3 className="feature-title">{feature.title}</h3>
    <p className="feature-description">{feature.description}</p>
  </div>
);

const WhiteFooter = () => (
  <div className="feature-section">
    <div className="feature-grid">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  </div>
);

export default WhiteFooter;
