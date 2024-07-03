// import React from 'react';
// import './Sidebar.css';

// const Sidebar = () => (
//   <div className="sidebar">
//     <div className="contact">
//       <h2>How can we help you?</h2>
//       <p>Contact us at the Consulting WP office nearest to you or submit a business inquiry online.</p>
//       <button className="btn-contact">Contacts</button>
//       <button className="btn-presentation">Company presentation</button>
//     </div>
//     <div className="testimonial">
//       <blockquote>
//         "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
//       </blockquote>
//       <p>— Amanda Seyfried, Sales & Marketing, Alien Ltd.</p>
//     </div>
//     <div className="news">
//       <h2>Recent News</h2>
//       <ul>
//         <li>A digital prescription for the pharma industry (April 24, 2024)</li>
//         <li>Harvest great ideas from your company’s best assets (April 20, 2024)</li>
//       </ul>
//     </div>
//   </div>
// );

// export default Sidebar;



import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="contact-section">
                <h2>How can we help you?</h2>
                <p>Contact us at the Consulting WP office nearest to you or submit a business inquiry online.</p>
                <button className="contact-button">Contacts</button>
            </div>

            <div className="brochure-section">
                <h3>Brochure</h3>
                <p>Existence it certainly explained how improving household pretended.</p>
                <div className="download-links">
                    <a href="www.google.com" className="download-link">Download Service</a>
                    <a href="www.google.com" className="download-link">Download Features</a>
                </div>
            </div>

            <div className="benefits-section">
                <h3>Benefits With Our Service</h3>
                <div className="benefit">
                    <img src="https://thumbs.dreamstime.com/b/versatile-idea-icon-312567265.jpg" alt="Flexible Solutions" />
                    <div>
                        <h4>Flexible Solutions</h4>
                        <p>Completely grow multimedia based content before global scenarios.</p>
                    </div>
                </div>
                <div className="benefit">
                    <img src="https://w7.pngwing.com/pngs/797/993/png-transparent-graphy-24-7-service-customer-service-twenty-four-miscellaneous-text-service.png" alt="24/7 Unlimited Support" />
                    <div>
                        <h4>24/7 Unlimited Support</h4>
                        <p>Completely grow multimedia based content before global scenarios.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
