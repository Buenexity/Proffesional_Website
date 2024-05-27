import React from 'react';
import './showcase.css'; 
function ShowCase(props) {
  return (
    <div className="showcase-container">
      <div className="showcase">
        <h2 className="title">{props.title}</h2>
        <div className="image-container">
          <img src={props.image} alt={props.title} className="image" />
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
