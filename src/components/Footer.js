import React from "react";
import "../styles/footer-style.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer_top-sec">
        <div className="footer-rows">
          <ul>
            <li className="footer_heading">Get in touch</li>
            <li className="footer_content">About Us</li>
            <li className="footer_content">Careers</li>
            <li className="footer_content">Press Release</li>
            <li className="footer_content">Blog</li>
          </ul>
        </div>
        <div className="footer-rows">
          <ul>
            <li className="footer_heading">Connections</li>
            <li className="footer_content">Facebook</li>
            <li className="footer_content">Twitter</li>
            <li className="footer_content">Instagram</li>
            <li className="footer_content">Youtube</li>
            <li className="footer_content">LinkedIn</li>
          </ul>
        </div>
        <div className="footer-rows">
          <ul>
            <li className="footer_heading">Earnings</li>
            <li className="footer_content">Become an Affiliate</li>
            <li className="footer_content">Advertise your product</li>
            <li className="footer_content">Sell on Market</li>
          </ul>
        </div>
        <div className="footer-rows">
          <ul>
            <li className="footer_heading">Account</li>
            <li className="footer_content">Your account</li>
            <li className="footer_content">Returns Centre</li>
            <li className="footer_content">100 % purchase protection</li>
            <li className="footer_content">Chat with us</li>
            <li className="footer_content">Help</li>
          </ul>
        </div>
      </div>
      <div className="footer_mid-sec">
        <div className="footer_mid-sec_heading footer_heading">
          Product tags
        </div>
        <ul className="footer_tags">
          <li>Beans</li>
          <li>Carrots</li>
          <li>Apples</li>
          <li>Garlic</li>
          <li>Mushrooms</li>
          <li>Tomatoes</li>
          <li>Chilli peppers</li>
          <li>Broccoli</li>
          <li>Watermelons</li>
          <li>Oranges</li>
          <li>Bananas</li>
          <li>Grapes</li>
          <li>Cherries</li>
          <li>Meat</li>
          <li>Seo tag</li>
          <li>Fish</li>
          <li>Seo tag</li>
          <li>Fresh food</li>
          <li>Lemons</li>
        </ul>
      </div>
      <div className="footer_last-sec">Copyright © 2020 petrbilek.com</div>
    </div>
  );
};

export default Footer;
