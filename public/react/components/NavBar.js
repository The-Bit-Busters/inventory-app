import React, { useState } from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../stylesheets/logo1.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: ".5px solid rgb(172, 172, 172)",
      }}
    >
      <nav className="nav-bar navbar-static-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" />
        </Link>
        <form>
          <IoIosSearch className="searchIcon" size="20px" />
          <input
            className="searchBar"
            type="text"
            placeholder="Search Products"
          />
        </form>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="navbar-btns">
            <Link to="/" style={{ textDecoration: "none" }}>
              <button>HOME</button> 
            </Link>
          </li>
          <li className="navbar-btns">
            <Link to="/about" style={{ textDecoration: "none" }}>
            <button>ABOUT</button> 
            </Link>
          </li>
          <li className="navbar-btns">
            <Link to="/contact" style={{ textDecoration: "none" }}>
            <button>Contact</button> 
            </Link>
          </li>
          <li className="navbar-btns">
            <Link to="/cart" style={{ textDecoration: "none" }}>
            <button>Cart</button> 
            </Link>
          </li>
        </ul>
        <div className="burger">
          {click ? (
            <FaTimes onClick={handleClick} size={22} />
          ) : (
            <FaBars onClick={handleClick} size={22} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
