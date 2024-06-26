import React from 'react';
import ServiceCard from './ServiceCard';
import Sidebar from './Sidebar';
import './ServicesGrid.css';
import Banner from './Banner';

const services = [
  {
    title: "Web Solutions",
    description: "E-commerce solutions (websites, Amazon, Flipkart listings), custom development (web and software)",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for efficient and reliable business operations.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Marketing Solutions",
    description: "SEO, marketing, branding, online marketing, WhatsApp marketing.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "App Development",
    description: "Robust and user-friendly mobile applications from concept to deployment.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Analytics and Reporting",
    description: "Detailed analytics and reporting to help you make data-driven decisions.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Security Services",
    description: "Ensuring digital assets are protected against potential threats.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Payment Gateways",
    description: "Secure and reliable payment gateway integration.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Hosting Services",
    description: "Reliable hosting to ensure your website is always up and running.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  },
  {
    title: "Email Services",
    description: "Professional email services to enhance business communication.",
    image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg"
  }
];

const ServicesGrid = () => (
  <>
  <Banner />
  <div className="services-page">
    <div className="services-header">
      {/* <h1>Services</h1> */}
    </div>
    <div className="content">
      <div className="services-list">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      <Sidebar />
    </div>
  </div>
  </>
);

export default ServicesGrid;
