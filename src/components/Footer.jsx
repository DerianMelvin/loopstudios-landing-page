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
