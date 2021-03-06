import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from '@material-ui/core';
import cartImg from '../../assets/imgs/cartLogo/cart.png';
import { useHistory } from 'react-router-dom';

const CartButton = () => {
  const { cart } = useContext(CartContext);
  let history = useHistory();

  const handleClick = () => {
    if (cart.length > 0) {
      history.push('/cart');
    } else alert('Add Items to view cart!');
  };

  return (
    <div>
      <Button className="button-cart" onClick={handleClick}>
        <img src={cartImg} alt="Shopping cart button" />
        <p>{cart.length}</p>
      </Button>
    </div>
  );
};

export default CartButton;
