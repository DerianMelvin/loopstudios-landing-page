import logo from "../images/logo.svg";
import iFacebook from '../images/icon-facebook.svg';
import iTwitter from '../images/icon-twitter.svg';
import iPinterest from '../images/icon-pinterest.svg';
import iInstagram from '../images/icon-instagram.svg';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
        <nav id="footer-nav">
          <img src={logo} alt="loopstudios logo" />
          <ul id="footer-links">
            <li className="link"><a href="#about">About</a></li>
            <li className="link"><a href="#careers">Careers</a></li>
            <li className="link"><a href="#events">Events</a></li>
            <li className="link"><a href="#products">Products</a></li>
            <li className="link"><a href="#support">Support</a></li>
          </ul>
        </nav>

        <div id="footer-info">
          <ul id="social-media">
            <a href="#facebook"><img src={iFacebook} alt="facebook" /></a>
            <a href="#twitter"><img src={iTwitter} alt="twitter" /></a>
            <a href="#pinterest"><img src={iPinterest} alt="pinterest" /></a>
            <a href="#instagram"><img src={iInstagram} alt="instagram" /></a>
          </ul>
          <p id="copyright">&#169; {currentYear} Loopstudios. All rights reserved.</p>
        </div>

      </footer>
  )
}

export default Footer
