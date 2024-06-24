import React from 'react';
import './banner.css';

const banner = () => {
  return (
    <div className="banner">
      <img 
        src="https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Web_Development_Banner_Image_0e476d1ab6.webp" 
        alt="Web Development Banner" 
        className="banner-img"
      />
    </div>
  );
};

export default banner;