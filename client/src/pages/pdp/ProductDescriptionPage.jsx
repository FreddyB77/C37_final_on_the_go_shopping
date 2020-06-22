import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

import BackNav from '../../components/navs/BackNav';

import ScanButton from '../../components/buttons/ScanButton';
import nullImg from '../../assets/imgs/productUnavailable.jpg';
import './productDescriptionPage.css';

const ProductDescriptionPage = () => {
  const { userSearch } = useContext(SearchContext);

  return (
    <div className="pdp-item-container">
      <BackNav />
      <img
        src={nullImg && userSearch?.searchResult[0]?.image}
        alt={`${userSearch?.searchResult[0]?.name}`}
      />
      <div className="pdp-item-stat">
        <h1 id="pdp-item-name">{userSearch?.searchResult[0]?.title}</h1>
        <p id="pdp-item-size">
          {userSearch?.searchResult[0]?.description.slice(0, 200)}
        </p>
        <p>${userSearch?.searchResult[0]?.price}</p>
        <p>Location in store: Aisle {Math.floor(Math.random() * 17)}</p>
        <p>In Stock: Qty {Math.floor(Math.random() * 100)}</p>
      </div>
      <ScanButton text="Scan" />
    </div>
  );
};

export { ProductDescriptionPage };
