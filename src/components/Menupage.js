import React from 'react'
import { Ndata } from '../data';

const Menupage = () => {
  return (
    <>
      {Ndata.map((intel) => {
        return (
          <div>
            <h1>{ intel.name}</h1>
            <h5>{intel.catogs}</h5>
            <h5>{intel.location}</h5>
            <h4>{intel.timings}   {intel.contact }</h4>
          </div>
    ) })}  
</>

  );
}

export default Menupage
