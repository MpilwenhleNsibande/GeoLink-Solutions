import React, { useEffect } from 'react';
import '../styles/About.css';
import {
  FaGlobeAfrica,
  FaLaptopCode,
  FaTree,
  FaUsers,
  FaCompass,
  FaUniversity,
  FaBookReader,
  FaSatellite,
} from 'react-icons/fa';
import profilePic from '../assets/Mpilo1.jpeg';
import backgroundImage from '../assets/World.jpg';

/* 🔥 Scroll Animation Hook */
const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

const About = () => {
  useScrollAnimation();

  return (
    <section
      id="about"
      className="about-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Intro Section */}
      <div className="intro reveal">
        <h1>GeoLink Solutions</h1>
        <p className="subtitle">
          Connecting data to its location through innovation with Geospatial Technology
        </p>
      </div>

      {/* Profile Card */}
      <div className="profile-card reveal left">
        <img src={profilePic} alt="Mpilwenhle Nsibande" className="profile-img" />
        <h2>Mpilwenhle Nsibande</h2>
        <p>Geospatial Scientist & Full Stack Developer</p>

        <div className="profile-intro">
          <p>
            I am passionate about using geospatial intelligence and modern web technology to
            solve real-world problems. With a background in geoinformatics, environmental science,
            and full stack development, I bring innovation, precision, and purpose to every project.
          </p>
          <p className="signature">— Mpilwenhle —</p>
        </div>
      </div>

      {/* Education & Interests */}
      <div className="flip-card-back reveal right">
        <h3><FaUniversity /> Background</h3>
        <p>BSc Environmental Sciences – University of Pretoria</p>
        <p>BSc (Hons) Geography and Environmental Science – University of Pretoria</p>
        <p>Full Stack Web Development – Zaio Coding School</p>

        <h3><FaBookReader /> Interests</h3>
        <ul>
          <li><FaTree /> Sustainable Solutions & Climate Action</li>
          <li><FaTree /> Sustainable Infrastructure Development</li>
          <li><FaSatellite /> Remote Sensing & LiDAR</li>
          <li><FaGlobeAfrica /> Spatial Data Science</li>
          <li><FaLaptopCode /> Full Stack Web Development</li>
          <li><FaUsers /> Public Speaking & Research</li>
        </ul>
      </div>

      {/* Company Info */}
      <div className="company-section reveal">
        <h2>About GeoLink</h2>
        <p>
          GeoLink Solutions specializes in geospatial science — from GIS mapping, UAV-LiDAR,
          and data visualization to full-stack web GIS applications for sustainability and innovation.
        </p>

        <div className="icon-features">
          {[
            { icon: <FaGlobeAfrica />, text: 'Geo-Tech' },
            { icon: <FaLaptopCode />, text: 'Web GIS Apps' },
            { icon: <FaTree />, text: 'Eco Innovation' },
            { icon: <FaCompass />, text: 'UAV-LiDAR Mapping' },
            { icon: <FaUsers />, text: 'Human-Centered Design' },
          ].map((f, i) => (
            <div key={i} className="reveal" style={{ animationDelay: `${i * 0.2}s` }}>
              {f.icon}
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="ticker reveal">
        <p>"Connecting data to its location” – GeoLink</p>
      </div>

      {/* Call-to-Action */}
      <div className="about-cta reveal">
        <a href="/portfolio" className="pulse-button">View My Portfolio</a>
      </div>
    </section>
  );
};

export default About;
