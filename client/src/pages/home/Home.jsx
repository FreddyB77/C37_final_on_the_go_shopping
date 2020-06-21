import React from 'react';
import './home.css';

import BottomNav from '../../components/navs/BottomNav';
import HomeNav from '../../components/navs/HomeNav';
import ShopAndScanButton from '../../components/buttons/ShopAndScanButton';
import Sales from '../../components/carousels/Sales'



const Home = ({ history }) => {

  return (
    <div
      className="home-container"
    >
      <HomeNav/>
      <ShopAndScanButton />
      <div className="home-item">
        <div className="home-item-banner">
          <h1>Sales</h1>
        </div>
              
        <Sales />
     
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
