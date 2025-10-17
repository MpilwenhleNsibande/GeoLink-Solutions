import React, { useState } from "react";
import "../styles/Home.css";
import profilePic from "../assets/Mpilo.jpeg";
import GIS from "../assets/gis.jpg";
import RS from "../assets/rs.jpg";
import SUS from "../assets/sus.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const banners = [
  {
    img: GIS,
    title: "Geospatial Data Mapping",
    desc: "Transforming spatial data into useful visualizations and insights for decision making and action.",
  },
  {
    img: RS,
    title: "Location Intelligence & Spatial Analysis",
    desc: "Turning raw geospatial data into meaningful information for impactful decisions.",
  },
  {
    img: SUS,
    title: "Geospatial Training & Webinars",
    desc: "Empowering professionals through hands-on training in spatial technologies.",
  },
];

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleMode = () => setLightMode(!lightMode);
  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <div className={`home-container ${lightMode ? "light" : "dark"}`}>
      {/* Background Video */}
      {!lightMode && (
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="overlay" />

      {/* Toggle */}
      <div className="dark-toggle" title="Toggle Light Mode">
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleMode}
            checked={lightMode}
          />
          <span className="slider" />
        </label>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="profile-pic-wrapper"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilePic}
            alt="Mpilwenhle Nsibande"
            className="profile-img"
          />
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Mpilwenhle Nsibande
        </motion.h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Geospatial Scientist & Full Stack Developer @{" "}
          <strong>GeoLink Solutions</strong>
        </motion.p>

        <motion.p
          className="typewriter-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typewriter
            words={[
              "Geospatial Science for Sustainable Development",
              "Powerful Spatial Insights, Smart Solutions",
              "Mapping the Future with Geospatial Tech",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="btn-outline" onClick={openVideo}>
            ▶ Watch Intro
          </button>
          <a href="#banners" className="btn-filled">
            Explore
          </a>
        </motion.div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <motion.div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="close-button"
              onClick={closeVideo}
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe
              src="https://www.youtube.com/embed/mqZGgH1rMCM"
              title="Intro Video"
              allowFullScreen
              frameBorder="0"
              loading="lazy"
            />
          </motion.div>
        </div>
      )}

      {/* Banner Showcase */}
      <section className="banner-showcase" id="banners">
        <div className="banner-grid">
          {banners.map((item, idx) => (
            <motion.div
              key={idx}
              className="banner"
              style={{ backgroundImage: `url(${item.img})` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
            >
              <div className="banner-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Connecting data to its location for better analysis.
        </motion.h3>
        <a href="/contact" className="pulse-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Home;
