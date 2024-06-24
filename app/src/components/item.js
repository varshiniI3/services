import React from 'react';
import './item.css';

const Item = ({ title, description, imageurl, moreurl }) => {
  return (
    <div className="item-card">
      <img src={imageurl} className="item-img" alt={title} />
      <div className="item-body">
        <h5 className="item-title">{title}</h5>
        <p className="item-text">{description}</p>
        {moreurl ? (
          <a href={moreurl} className="item-btn" rel="noreferrer" target="_blank">See More</a>
        ) : (
          <button className="item-btn" onClick={() => alert('More information coming soon!')}>See More</button>
        )}
      </div>
    </div>
  );
};

export default Item;



























// import React from 'react';
// import './item.css';  // Import the CSS file

// const Item = (props) => {
//     let { title, description, imageurl, moreurl } = props;
//     return (
//         <div>
//             <div className="card my-2 mx-3">
//                 <img src={imageurl} className="card-img-top standard-image" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{title}</h5>
//                     <p className="card-text">{description}</p>
//                     <a href={moreurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-light">See More</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Item;



