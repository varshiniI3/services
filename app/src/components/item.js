import React from 'react';
import './item.css';  // Import the CSS file

const item= ({ title, description, imageurl }) => {
  return (
    <div className="card my-2 mx-3">
      <img src={imageurl} className="card-img-top service-image" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button>see more</button>
      </div>
    </div>
  );
};

export default item;


























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



