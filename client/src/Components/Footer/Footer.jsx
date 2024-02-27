import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet. Sit quas fugiat ut quia voluptatem aut
            cupiditate molestiae est corporis magnam qui recusandae nihil. Qui
            nihil odit ea quis exercitationem ut quia illum et sunt commodi rem
            sequi animi.{" "}
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet. Sit quas fugiat ut quia voluptatem aut
            cupiditate molestiae est corporis magnam qui recusandae nihil. Qui
            nihil odit ea quis exercitationem ut quia illum et sunt commodi rem
            sequi animi.{" "}
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ONLINESTORE</span>
          <span className="copywrite">
            © Copywrite 2024. All rights reserved{" "}
          </span>
        </div>
        <div className="right">
          <img src="./img/brands.jpg" alt="brandImage" width="250" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
