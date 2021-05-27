import "./css/main.css";
import Header from "./components/Header";
import About from "./components/About";
import Contents from "./components/Contents";

import logo from "./images/logo.svg";
import iFacebook from './images/icon-facebook.svg';
import iTwitter from './images/icon-twitter.svg';
import iPinterest from './images/icon-pinterest.svg';
import iInstagram from './images/icon-instagram.svg';

function App() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="App">
      <Header />
      <About />
      <Contents />
      <footer>
        <nav id="footer-nav">
          <img src={logo} alt="loopstudios logo" />
          <ul>
            <li className="link">About</li>
            <li className="link">Careers</li>
            <li className="link">Events</li>
            <li className="link">Products</li>
            <li className="link">Support</li>
          </ul>
        </nav>

        <div id="footer-info">
          <ul id="social-media">
            <a href="#"><img src={iFacebook} alt="facebook" /></a>
            <a href="#"><img src={iTwitter} alt="twitter" /></a>
            <a href="#"><img src={iPinterest} alt="pinterest" /></a>
            <a href="#"><img src={iInstagram} alt="instagram" /></a>
          </ul>
          <p id="copyright">&#169; {currentYear} Loopstudios. All rights reserved.</p>
        </div>

      </footer>
    </div>
  );
}

export default App;
