import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Ndata } from "../data";
import RestaurantCard from './RestaurantCard';

const Restocards = () => {
  const navigate = useNavigate();
 
  
  const handleCardClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="restocards-container">
      {Ndata.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default Restocards;
