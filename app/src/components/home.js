import React from 'react';
import Banner from '../components/banner';

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="container my-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1>Welcome to Our Services</h1>
        <p>We offer a variety of services to meet your needs.</p>
      </div>
      </>
  );
};

export default HomePage;
