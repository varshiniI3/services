import React from 'react';
import Banner from '../components/banner';
import './home.css';

const home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row my-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1>Services</h1>
          <p>We offer a variety of services to meet your needs.</p>
        </div>
      </div>
    </>
  );
};

export default home;
