import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [productDrawerState, setProductDrawerState] = useState(false);
  const [userAccount] = useState({
    fName: 'Carmen',
    lName: 'Santiago',
    email: 'santaCarmelita@gmail.com'
  });
  const [cartTotal, setCartTotal] = useState({
    subTotal: 0,
    saleTax: 0,
    savings: 0,
    total: 0
  });

  useEffect(() => {
    //If cart > 0 update localStorage
    //else if cart is empty but localStorage isn't update localstorage
    if (cart.length !== 0) {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    } else if (
      cart.length === 0 &&
      JSON.parse(window.localStorage.getItem('cart')).length !== 0
    ) {
      setCart(JSON.parse(window.localStorage.getItem('cart')));
    }

    //Calc: Cart's Total
    if (cart !== false) {
      let subtotal = 0;
      cart.forEach((item) => {
        subtotal += item.quantity * (item.price * 100);
      });
      subtotal = subtotal.toFixed(2) / 100;
      const saletax = subtotal * 0.07;
      const savings = (subtotal * 0.1).toFixed(2);
      const total = saletax + subtotal;
      setCartTotal({
        subTotal: subtotal,
        saleTax: saletax,
        savings: savings,
        total: total
      });
    } else setCartTotal({ ...cartTotal, subTotal: 0 });
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        //State
        cart,
        setCart,
        userAccount,
        productDrawerState,
        setProductDrawerState,
        cartTotal
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
