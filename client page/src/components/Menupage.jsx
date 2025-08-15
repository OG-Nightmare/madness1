import React from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

const MenuPage = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id, 10));


  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="menu-page">
      <div className="restaurant-header">
        <img className='inImg' src={restaurant.image} alt={restaurant.name} />
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <p className="cuisine">{restaurant.cuisine}</p>
          <p className="rating">Rating: {restaurant.rating} </p>
        </div>
      </div>
      
      
      <div className="menu-items">
        {restaurant.menu.map((item, index) => (
          <div key={index} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
