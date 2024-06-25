import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="contact">
      <h2>How can we help you?</h2>
      <p>Contact us at the Consulting WP office nearest to you or submit a business inquiry online.</p>
      <button className="btn-contact">Contacts</button>
      <button className="btn-presentation">Company presentation</button>
    </div>
    <div className="testimonial">
      <blockquote>
        "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
      </blockquote>
      <p>— Amanda Seyfried, Sales & Marketing, Alien Ltd.</p>
    </div>
    <div className="news">
      <h2>Recent News</h2>
      <ul>
        <li>A digital prescription for the pharma industry (April 24, 2024)</li>
        <li>Harvest great ideas from your company’s best assets (April 20, 2024)</li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
