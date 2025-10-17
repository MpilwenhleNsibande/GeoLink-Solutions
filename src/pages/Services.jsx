import React, { useState, useEffect } from 'react';
import '../styles/Services.css';
import gisImg from '../assets/gis.jpg';
import uavImg from '../assets/Drone1.jpg';
import webgisImg from '../assets/GIS Train.jpg';
import envImg from '../assets/sus.jpg';
import devImg from '../assets/GIS_1.png';
import dbImg from '../assets/GIS Des.webp';

const services = [
  {
    title: 'GIS Mapping & Spatial Analysis',
    description:
      'Advanced mapping solutions using spatial data to reveal patterns, trends, and relationships for smarter decision-making. This includes site suitability, predictive modelling, and geostatistical tools.',
    image: gisImg,
  },
  {
    title: 'Remote Sensing Data Processing & Analysis',
    description:
      'Satellite and drone data processing for vegetation analysis, change detection, and environmental monitoring. We use LiDAR, NDVI, and multispectral data workflows.',
    image: uavImg,
  },
  {
    title: 'GIS Training & Webinars',
    description:
      'We offer a range of training sessions and webinars on GIS technologies and applications. Tailored for individuals, companies, and institutions looking to enhance their geospatial skills.',
    image: webgisImg,
  },
  {
    title: 'Environmental Data Solutions',
    description:
      'Custom spatial models for climate, hydrology, conservation, and land use projects. We design data pipelines and dashboards for data-driven decisions.',
    image: envImg,
  },
  {
    title: 'Full Stack And GIS Web Development',
    description:
      'Custom, scalable GIS web solutions for personal, research, or business platforms with React, Node.js, and more. Optimized for GIS and science communication, including advanced mapping and predictive modeling.',
    image: devImg,
  },
  {
    title: 'Spatial Database Design',
    description:
      'Efficient spatial data storage and management systems using PostgreSQL/PostGIS and more. Optimized for analytics, performance, and scale.',
    image: dbImg,
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Scroll animation with stagger
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = entry.target.dataset.delay;
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="services-section">
      <h2 className="section-title reveal" data-delay="0s">Services</h2>
      <p className="services-intro reveal" data-delay="0.1s">
        We offer professional geospatial and software solutions tailored for research,
        conservation, development, and innovation.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card reveal"
            data-delay={`${index * 0.15 + 0.2}s`}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>
                {expandedIndex === index
                  ? service.description
                  : `${service.description.substring(0, 90)}...`}
              </p>
              <button
                className="read-more"
                onClick={() => toggleReadMore(index)}
              >
                {expandedIndex === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
