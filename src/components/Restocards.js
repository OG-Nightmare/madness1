import React from 'react'
import { memo } from 'react';
import { restos } from '../data';
const Restocards = () => {
  return (
    <>
        {restos.map((intel) => { 
          return (
            <div className="card">
              <img
                className="card-img"
                src={intel.img}
                alt="No Image"
                loading='lazy'
              />
              <div className="card-body">
                <h2 className="card-title">{intel.name}</h2>
                <p className="card-text">stuff</p>
                <p className="card-text">stuffff</p>
                <p className="card-text">stuff</p>
              </div>
            </div>
          );
         })}
    </>
  );
}

export default memo(Restocards);
