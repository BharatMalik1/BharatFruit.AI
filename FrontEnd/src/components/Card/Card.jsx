import React from 'react';
import ChatbotPage from '../ChatbotPage/ChatbotPage';
import './Card.css'; // Import the CSS file for card styling

const Card = ({ title,imageUrl,onClick }) => {
  return (
    <div className="card" onClick={onClick}>
       <img src={imageUrl} alt={title} className="card-image" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
