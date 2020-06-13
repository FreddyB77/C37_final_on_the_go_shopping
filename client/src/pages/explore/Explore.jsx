import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import './explore.css'

import BackNav from '../../components/navs/BackNav'
import BottomNav from '../../components/navs/BottomNav'
import SearchBar from '../../components/SearchBar'
import Departments from '../../components/carousels/Departments'

const Explore = ({history}) => {
    const { cart } = useContext(CartContext)
    
    return (
        <div>
            <BackNav history={history}/>
            <SearchBar />
            <Departments />
            <BottomNav history={history}/>
        </div>
    )
}

export default Explore
