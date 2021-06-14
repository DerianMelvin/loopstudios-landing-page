import React, { useState } from "react";

import iHamburger from "../images/icon-hamburger.svg";
import iClose from "../images/icon-close.svg";

const HamburgerNav = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const handleDisplayNav = () => {
    setDisplayNav((prevState) => !prevState);
  };

  if (displayNav) {
    return (
      <React.Fragment>
        <img
          id="icon-close"
          className="mobile-nav-icon"
          src={iClose}
          alt="hamburger close nav"
          onClick={() => handleDisplayNav()}
        />

        <ul id="hamburger-links" onClick={() => handleDisplayNav()}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
        </ul>
      </React.Fragment>
    );
  } else {
    return (
      <img
        id="icon-hamburger"
        className="mobile-nav-icon"
        src={iHamburger}
        alt="hamburger open nav"
        onClick={() => handleDisplayNav()}
      />
    );
  }
};

export default HamburgerNav;
