import Logo from "../../components/Logo/Logo";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <div className="footer__logo">
            <Logo />
          </div>
          <p>you can reach out to us on our various social media handles</p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__services">
          <h3>our services</h3>
          <ul>
            <li>
              <a href="#">App development and design</a>
            </li>
            <li>
              <a href="#">App monetization</a>
            </li>
            <li>
              <a href="#">Real estate & construction</a>
            </li>
            <li>
              <a href="#">Engineering & consultancy services</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">help</a>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__contact">
          <h3>contact us</h3>
          <ul>
            <li>
              <a href="#">
                <FaLocationDot />
                161 Ikorodu Road, Lagos state, Nigeria
              </a>
            </li>
            <li>
              <a href="tel:+23418934585">
                <IoCall />
                +234-1-8934585
              </a>
            </li>
            <li>
              <a href="mailto:info@greystonesengineering.com">
                <IoIosMail />
                info@greystonesengineering.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <small>copyright&copy; Greystones Engneering 2025</small>
      </div>
    </footer>
  );
};

export default Footer;
