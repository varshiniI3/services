import React from 'react';
import ServiceCard from './ServiceCard';
import Sidebar from './Sidebar';
import './ServicesGrid.css';
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faBullhorn, faMobileAlt, faChartLine, faShieldAlt, faCreditCard, faServer, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "Web Solutions",
    description: "E-commerce solutions (websites, Amazon, Flipkart listings), custom development (web and software)",
    icon:  <FontAwesomeIcon icon={faCode} />
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for efficient and reliable business operations.",
    icon: <FontAwesomeIcon icon={faCloud} />
  },
  {
    title: "Marketing Solutions",
    description: "SEO, marketing, branding, online marketing, WhatsApp marketing.",
    icon: <FontAwesomeIcon icon={faBullhorn} />
  },
  {
    title: "App Development",
    description: "Robust and user-friendly mobile applications from concept to deployment.",
    icon: <FontAwesomeIcon icon={faMobileAlt} />
  },
  {
    title: "Analytics and Reporting",
    description: "Detailed analytics and reporting to help you make data-driven decisions.",
    icon: <FontAwesomeIcon icon={faChartLine} />
  },
  {
    title: "Security Services",
    description: "Ensuring digital assets are protected against potential threats.",
    icon: <FontAwesomeIcon icon={faShieldAlt} />
  },
  {
    title: "Payment Gateways",
    description: "Secure and reliable payment gateway integration.",
    icon: <FontAwesomeIcon icon={faCreditCard} />
  },
  {
    title: "Hosting Services",
    description: "Reliable hosting to ensure your website is always up and running.",
    icon: <FontAwesomeIcon icon={faServer} />
  },
  {
    title: "Email Services",
    description: "Professional email services to enhance business communication.",
    icon: <FontAwesomeIcon icon={faEnvelope} />
  }
];

const ServicesGrid = () => (
  <>
    <Header />
    <div className="services-page">
      <div className="content">
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
    <Footer />
  </>
);

export default ServicesGrid;
