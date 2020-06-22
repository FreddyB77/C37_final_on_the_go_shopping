import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { CartContext } from '../../context/CartContext';

const CheckoutButton = () => {
  let history = useHistory();
  const { cart } = useContext(CartContext);

  const handleClick = () => {
    if (cart.length > 0) {
      history.push('/checkout');
    } else alert('Add items to checkout! Thanks --Management');
  };

  return <Button onClick={handleClick}>Checkout</Button>;
};

export default CheckoutButton;
