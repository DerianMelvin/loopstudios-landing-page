import logo from "../images/logo.svg";
import HamburgerNav from "./HamburgerNav";

const Header = () => {
  return (
    <header>
      <nav id="header-nav">
        <img id="header-logo" src={logo} alt="loopstudios logo" />

        <ul id="default-links">
          <li className="link">
            <a href="#about">About</a>
          </li>
          <li className="link">
            <a href="#careers">Careers</a>
          </li>
          <li className="link">
            <a href="#events">Events</a>
          </li>
          <li className="link">
            <a href="#products">Products</a>
          </li>
          <li className="link">
            <a href="#support">Support</a>
          </li>
        </ul>
        
        <HamburgerNav />
      </nav>

      <div id="hero-text">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </header>
  );
};

export default Header;
