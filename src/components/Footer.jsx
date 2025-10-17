import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-container" aria-label="Site Footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <Link to="/"> {/* ✅ Clickable logo */}
            <img src={logo} alt="GeoLink Logo" className="footer-logo" />
          </Link>
          <h3>GeoLink Solutions</h3>
          <p>
            Connecting data to its location through innovation with Geospatial Technology.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              Benoni, South Africa
            </li>
            <li>
              <FaPhone className="footer-icon" />
              +27 69 705 6698
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              mpilwenhlegoje@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-section social">
          <h3>Follow</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} GeoLink Solutions — Let's connect data to its location together.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
