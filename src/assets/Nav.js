import React from "react";
import logo from "../pics/pngwing.com.png"
const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <h1>
          <img src={logo} alt="Logo" className="log" />
        </h1>

        
        <textarea className="textarea" name="search" placeholder="search tera bhai kareg"></textarea>

        <ul className="naa">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>{" "}
          {/* Fixed typo */}
        </ul>
      </nav>
    </>
  );
  <img src="" alt="" />
};

export default Nav;
