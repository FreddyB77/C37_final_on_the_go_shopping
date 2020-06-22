import React from 'react';
import BackArrow from '../buttons/BackArrow';

import CartButton from '../buttons/CartButton';
import './nav.css';

const BackNav = () => {
  return (
    <div className="backNav-container">
      <div className="backNav-control">
        <BackArrow />
        <CartButton />
      </div>
    </div>
  );
};

export default BackNav;
