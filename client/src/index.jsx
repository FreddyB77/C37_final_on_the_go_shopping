import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContextProvider } from './context/CartContext';
import { SearchContextProvider } from './context/SearchContext';


import { UserContextProvider } from './context/UserContext'

ReactDOM.render( 
    <UserContextProvider>
    <CartContextProvider>
    <SearchContextProvider>
        <App />
    </SearchContextProvider>
    </CartContextProvider>
    </UserContextProvider> 
    , document.getElementById('root')
);
