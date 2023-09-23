// Card.jsx
import React from 'react';
import './Card.css';

function Card({ title, description, link, imageUrl }) {
  return (

    <div className="card">
        <table>
            <thead>

          <tr>
      <img src={imageUrl} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Access Resource</a>
      </tr>

      </thead>
      </table>
    </div>
  );
}

export default Card;
