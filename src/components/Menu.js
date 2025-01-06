import React, { useState } from "react";
import { Ndata } from "../data";

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <div className="menu-container">
      <div className="menu-list">
        {Ndata.map((dish, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() => handleDishClick(dish)}
          >
            {dish.name}
          </div>
        ))}
      </div>
      <div className="menu-details">
        {selectedDish ? (
          <>
            <h2>{selectedDish.name}</h2>
            <ul>
              {selectedDish.variations.map((variation, index) => (
                <li key={index}>
                  {variation.flavor} - {variation.price}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Select a dish to see variations</p>
        )}
      </div>
    </div>
  );
};

export default Menu;

