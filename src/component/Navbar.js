import React from "react";
import logo from "../assets/logo.webp";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Link to={"/"} className="logo">
            <img src={logo}></img>
            <h2>
              <span>D</span>
              itagis
              <span> R</span>
              ent
            </h2>
          </Link>
          <Link to={"/favorite"} className="navbar-favorite">
            <MdFavorite className="navbar-favorite-icon" />
            <h4>Ưa thích</h4>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
