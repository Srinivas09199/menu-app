import React from 'react';
import './MenuItem.css';

const MenuItem = ({ image, title }) => {
  return (
    <div className="menu-item" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default MenuItem;
