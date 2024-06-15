import React from 'react';
import Item from '../components/item';

const page = () => {
  const services = [
    { title: 'Web Development', description: 'To provide platform and develop an application under proper surveillance', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Mobile App Development', description: 'To create mobile applications for various platforms', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Digital Marketing', description: 'To market your product through digital channels', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Web Development', description: 'To provide platform and develop an application under proper surveillance', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Mobile App Development', description: 'To create mobile applications for various platforms', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Digital Marketing', description: 'To market your product through digital channels', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Web Development', description: 'To provide platform and develop an application under proper surveillance', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Mobile App Development', description: 'To create mobile applications for various platforms', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    { title: 'Digital Marketing', description: 'To market your product through digital channels', imageurl: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg' },
    // Add more services as needed
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

















