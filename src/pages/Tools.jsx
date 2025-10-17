import React from "react";
import "../styles/Tools.css";

import { 
  FaDatabase, FaSatellite, FaFire, FaBootstrap, FaNodeJs 
} from "react-icons/fa";
import { 
  SiArcgis, SiQgis, SiPython, SiJavascript, SiPostgresql, SiR, SiReact, SiLeaflet, 
  SiMongodb, SiFirebase, SiHtml5, SiCss3, SiPostman
} from "react-icons/si";

const tools = [
  { icon: <SiArcgis size={48} color="#68b684" />, title: "ArcGIS Pro", category: "GIS & Remote Sensing" },
  { icon: <SiQgis size={48} color="#37775b" />, title: "QGIS", category: "GIS & Remote Sensing" },
  { icon: <FaSatellite size={48} color="#d1b164" />, title: "Sentinel-2 / ENVI", category: "Remote Sensing" },
  { icon: <SiPython size={48} color="#306998" />, title: "Python", category: "Programming" },
  { icon: <SiR size={48} color="#1e90ff" />, title: "R", category: "Data Science" },
  { icon: <SiJavascript size={48} color="#f0db4f" />, title: "JavaScript", category: "Programming" },
  { icon: <SiReact size={48} color="#61dafb" />, title: "React.js", category: "Web Development" },
  { icon: <SiLeaflet size={48} color="#7ac143" />, title: "Leaflet.js", category: "Web GIS" },
  { icon: <FaDatabase size={48} color="#a591e3" />, title: "PostgreSQL/PostGIS", category: "Spatial Databases" },
  { icon: <SiMongodb size={48} color="#4DB33D" />, title: "MongoDB", category: "NoSQL Database" },
  { icon: <FaFire size={48} color="#FFCA28" />, title: "Firebase", category: "Cloud Backend" },
  { icon: <SiHtml5 size={48} color="#E44D26" />, title: "HTML5", category: "Frontend" },
  { icon: <SiCss3 size={48} color="#264de4" />, title: "CSS3", category: "Frontend Styling" },
  { icon: <FaBootstrap size={48} color="#7a3bbf" />, title: "Bootstrap", category: "CSS Framework" },
  { icon: <SiPostman size={48} color="#FF6C37" />, title: "Postman", category: "API Testing" },
  { icon: <FaNodeJs size={48} color="#3C873A" />, title: "Node.js", category: "Backend Runtime" },
  { icon: <SiArcgis size={48} color="#0F75BC" />, title: "RESTful APIs", category: "Web Services" },
];

const Tools = () => {
  return (
    <section className="tools-section">
      <h2 className="tools-title">Technologies & Tools</h2>
      <p className="tools-intro">
        The tools that powers our geospatial analysis, research, development and more.
      </p>

      <div className="tools-grid">
        {tools.map((tool, idx) => (
          <div key={idx} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <h3 className="tool-name">{tool.title}</h3>
            <p className="tool-category">{tool.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
