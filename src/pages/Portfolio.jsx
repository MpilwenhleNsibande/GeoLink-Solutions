import React, { useState, useEffect } from 'react';
import '../styles/Portfolio.css';
import placeholder1 from '../assets/Lidar.png';
import placeholder2 from '../assets/Waste.png';
import placeholder3 from '../assets/Bob.png';
import placeholder4 from '../assets/T Map.png';
import placeholder5 from '../assets/Farm.png';
import placeholder6 from '../assets/Lapalala.jpg';

const projects = [
  {
    title: 'Vegetation Biomass Estimation Using LiDAR UAV Data',
    shortDescription: 'Remote sensing model using UAV LiDAR to estimate grass biomass in game reserves.',
    fullDescription: 'Developed a remote sensing model using UAV LiDAR to estimate grass biomass in South African game reserves. This project used ground-truthing and statistical modeling to validate estimates and visualize results in GIS software for sustainable reserve management.',
    image: placeholder1,
  },
  {
    title: 'Podcast and ArcGIS Online Dashboard for Waste Collection in Hatfield CID',
    shortDescription: 'Spatial analysis and digital storytelling to address food waste management in Hatfield CID.',
    fullDescription: 'I conducted a GIS-based analysis to determine optimal waste bin locations and efficient waste collection routes. The results were visualized through an interactive ArcGIS Online dashboard, showcasing bin distribution, service areas, and optimized collection paths.',
    image: placeholder2,
  },
  {
    title: 'Bob Ross GIS Art Project',
    shortDescription: 'GIS-based digital artwork inspired by Bob Ross painting tutorial using QGIS.',
    fullDescription: 'The project involved designing and digitizing points, lines, and polygons within a single GeoPackage, applying renderers and symbology techniques to simulate textures and landscapes. Random points added depth and artistic realism. Final output: a rendered PNG showcasing creativity through GIS technology.',
    image: placeholder3,
  },
  {
    title: 'Tourism Map of Oranjestad, Aruba using OpenStreetMap and QGIS',
    shortDescription: 'Detailed tourism map showcasing attractions, amenities, and transport.',
    fullDescription: 'Created an interactive tourism map for Oranjestad, Aruba using OpenStreetMap and QGIS. Mapped attractions, amenities, and transport routes, providing a useful resource for visitors and businesses.',
    image: placeholder4,
  },
  {
    title: 'My Farm: Mapping My Local Area for Tourism Visitors',
    shortDescription: 'Interactive map promoting local attractions and cultural landmarks.',
    fullDescription: 'Visualized routes, key amenities, and land features for rural tourism. Designed a simple spatial database structure to manage and integrate tourism data for web use.',
    image: placeholder5,
  },
  {
    title: 'Ecological Map for Lapalala Wilderness School',
    shortDescription: 'Ecological map highlighting environmental patterns and habitats.',
    fullDescription: 'Integrated Esri environmental datasets and other spatial data in ArcGIS Pro to visualize terrain, vegetation, and ecological zones. Supported research and field planning with clear spatial insights.',
    image: placeholder6,
  },
];

const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 50) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="services-section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <p className="services-intro">
        A selection of recent projects blending geospatial science and full-stack development.
      </p>

      <div className="services-grid">
        {projects.map((project, index) => (
          <div key={index} className="service-card reveal">
            <img src={project.image} alt={project.title} className="service-image" />
            <div className="service-content">
              <h3>{project.title}</h3>
              <p>
                {expandedIndex === index
                  ? project.fullDescription
                  : project.shortDescription.length > 90
                  ? `${project.shortDescription.substring(0, 90)}...`
                  : project.shortDescription
                }
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

export default Portfolio;
