import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="restaurant-card"
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
    >
      <img src={restaurant.img} alt="cars" />
      <div className="card-info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.catogs}</p>
        <p className="rating">{restaurant.location} </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
