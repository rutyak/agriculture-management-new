import React from "react";
import "./Header.css";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-top">
        <p>
          Enjoy complimentary shipping and a pack of red envelopes with every
          deliver-to-door orders over HKD 900 by entering NY25 at checkout.
        </p>
        <span className="plus-icon">+</span>
      </div>
      <div className="header-bottom">
        <nav className="nav-links">
          <a href="/">New & Notable</a>
          <a href="/">Skin Care</a>
          <a href="/">Hand & Body</a>
          <a href="/">Home</a>
          <a href="/">Hair</a>
          <a href="/">Fragrance</a>
          <a href="/">Kits & Travel</a>
          <a href="/">Gifts</a>
          <a href="/">Read</a>
          <a href="/">Stores</a>
          <a href="/">Facial Appointments</a>
          <IoSearch className="search" />
        </nav>
        <div className="header-actions">
          <a href="/">Log in</a>
          <a href="/">Cabinet</a>
          <a href="/">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
