import React from 'react';

const Car = (props: { occupied: boolean; face: string }) => {
  return (
    <div className={`car-wrapper ${props.face && `facing-${props.face}`}`}>
      <div className={`car ${props.occupied ? 'occupied' : 'free'}`}>
        <div className="model"></div>
      </div>
    </div>
  );
};
export default Car;
