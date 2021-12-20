import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="mainNav">
        <div className="myLogo">
          <h2>!IH</h2>
        </div>

        <div className="menuLink">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Conatct</a>
            </li>
          </ul>
        </div>

        <div className="mediaLink">
          <ul className="desktopLink">
            <li>
              <a href="facebook.com">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
