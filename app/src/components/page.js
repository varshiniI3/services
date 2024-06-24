import React from 'react';
import Item from '../components/item';
import './page.css';

const page = () => {
  const services = [
    { title: 'Web Solutions', description: 'Web development, e-commerce solutions , custom development ', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Cloud Solutions', description: 'Cloud storage, computing, and management services', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Marketing Solutions', description: 'SEO, marketing, branding, online marketing, WhatsApp marketing', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'App Development', description: 'Mobile application development for various platforms', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Analytics and Reporting', description: 'Data analytics and comprehensive reporting services', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Security Services', description: 'Security solutions for web, software, and mobile applications', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Payment Gateways', description: 'Integration of secure payment gateways for your applications', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Hosting Services', description: 'Reliable and scalable hosting solutions for applications', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Email Services', description: 'Professional email hosting and management services', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' }
  ];

  return (
    <div className="container">
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <Item 
              title={service.title} 
              description={service.description} 
              imageurl={service.imageurl} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
