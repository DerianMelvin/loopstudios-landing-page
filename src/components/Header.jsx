import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <nav id="header-nav">
        <img src={logo} alt="loopstudios logo" />
        <ul>
          <li className="link">About</li>
          <li className="link">Careers</li>
          <li className="link">Events</li>
          <li className="link">Products</li>
          <li className="link">Support</li>
        </ul>
      </nav>

      <div id="hero-text">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </header>
  );
};

export default Header;
