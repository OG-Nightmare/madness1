import React from "react";

const RestaurantMenu = ({ restaurant, goBack }) => {
  return (
    <div>
      <button onClick={goBack} style={{ marginBottom: "16px" }}>
        Back
      </button>
      <h2>{restaurant.name}</h2>
      <ul>
        {restaurant.menu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
