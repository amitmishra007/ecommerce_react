import React from "react";
import "../styles/header-style.scss";
import Logo from "../images/freshnesecom-logo.svg";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="container">
      <div className="top-nav">
        <ul className="top-nav_left _font1">
          <li className="primary-color ">Chat with us</li>
          <li>info@freshnesecom.com</li>
        </ul>
        <ul className="top-nav_right _font1">
          <li className="primary-color">Blog</li>
          <li className="primary-color">About Us</li>
          <li className="primary-color">Careers</li>
        </ul>
      </div>
      <div className="mid-nav">
        <img src={Logo} alt="freshnese-logo" />
        <div className="dropdown-cum-searchbar">
          <form className="nav-form">
            <select name="search_dropdown" id="search_dropdown">
              <option value="all_categories">All categories</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="meat">Meat</option>
            </select>
            <hr className="vl"></hr>
            <input
              type="text"
              placeholder="Search Products, categories ..."
            ></input>
          </form>
          <VscSearch />
        </div>
        <div className="user-and-cart-icons">
          <AiOutlineUser size="1.5rem" />
          <BsBasket3 size="1.5rem" />
        </div>
      </div>
      <div className="bottom-nav">
        <select name="bakery" id="bakery">
          <option value="bakery">Bakery</option>
        </select>
        <select name="fruitsandveggies" id="fruitsandveggies">
          <option value="fruitsandvegetables">Fruits and Vegetables</option>
        </select>
        <select name="meatnfish" id="meatnfish">
          <option value="meatandfish">Meat and Fish</option>
        </select>
        <select name="drinks" id="drinks">
          <option value="drinks">Drinks</option>
        </select>
        <select name="kitchen" id="kitchen">
          <option value="kitchen">Kitchen</option>
        </select>
        <select name="specialnutrition" id="specialnutrition">
          <option value="specialnutrition">Special Nutrition</option>
        </select>
        <select name="baby" id="baby">
          <option value="baby">Baby</option>
        </select>
        <select name="pharmacy" id="pharmacy">
          <option value="pharmacy">Pharmacy</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
