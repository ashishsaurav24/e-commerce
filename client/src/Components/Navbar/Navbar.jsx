import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/flag.webp" alt="flag-india" height={25} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Kids</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">ONLINESTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlinedIcon />
          </div>
          <div className="cartIcon">
            <ShoppingBagOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
