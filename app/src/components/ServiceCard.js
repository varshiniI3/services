import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, image }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <div className="service-content">
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
      <a href="#">read more &gt;</a>
    </div>
  </div>
);

export default ServiceCard;
