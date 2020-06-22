import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Total from '../../components/drawer/Total';

import './receipt.css';
import returnHome from '../../assets/imgs/returnHome.png';
import barcode from '../../assets/imgs/barcode.svg';

const ReceiptPage = () => {
  const { setCart } = useContext(CartContext);
  let history = useHistory();
  return (
    <div>
      <div className="receipt-Nav">
        <h1>On-the-Go</h1>
        <img
          src={returnHome}
          alt="Return to home page icon"
          onClick={() => {
            history.push('/home');
            setCart(false);
          }}
        />
      </div>

      <h1 id="receipt-thanks">Thank you for shopping with us!</h1>
      <Total />

      <div className="receipt-barcode">
        <p>Please show this screen to security on your way out</p>
        <img src={barcode} alt="Exit barcode. Please show to security" />
      </div>
    </div>
  );
};

export default ReceiptPage;
