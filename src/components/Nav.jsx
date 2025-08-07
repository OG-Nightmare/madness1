
import React from "react";
import logo from "../assets/pics/pngwing.com.png";
const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <h1>
          <img src={logo} alt="Logo" className="log" />
        </h1>

        <textarea
          className="textarea"
          name="search"
          placeholder="search here"
        ></textarea>

        <ul className="naa">
          <li>
            <a href="https://yournxtstartup.com/">Home</a>
          </li>
          <li>
            <a href="https://yournxtstartup.com/">About Us</a>
          </li>
          <li>
            <a href="https://yournxtstartup.com/">Products</a>
          </li>
          <li>
            <a href="https://yournxtstartup.com/">Contact</a>
          </li>{" "}
          {/* Fixed typo */}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
