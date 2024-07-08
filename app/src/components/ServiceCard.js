import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="home-service-icon">
      {icon}
    </div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="read-more">Read more &gt;</a>
    </div>
  </div>
);

export default ServiceCard;
