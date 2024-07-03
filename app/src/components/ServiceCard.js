
// import React from 'react';
// import './ServiceCard.css';

// const ServiceCard = ({ title, description, icon }) => (
//   <div className="service-card">
//     <div className="home-service-icon" style={{ fontSize: '40px', color: '#3DB166' }}>
//       {icon}
//     </div>
//     <div className="service-content">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <a href="www.google.com">read more &gt;</a>
//     </div>
//   </div>
// );

// export default ServiceCard;



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
      <button>read more &gt;</button>
    </div>
  </div>
);

export default ServiceCard;
