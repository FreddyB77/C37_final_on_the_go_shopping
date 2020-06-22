import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContext'
import { LocationContextProvider } from './context/LocationContext'
import { CartContextProvider } from './context/CartContext';
import { SearchContextProvider } from './context/SearchContext';

ReactDOM.render( 
    <UserContextProvider>
    <LocationContextProvider>
    <CartContextProvider>
    <SearchContextProvider>
        <App />
    </SearchContextProvider>
    </CartContextProvider>
    </LocationContextProvider>
    </UserContextProvider> 

    , document.getElementById('root')
);
