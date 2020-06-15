import React, { useContext } from 'react'
import { CartContext} from '../../context/CartContext'

import BackNav from '../../components/navs/BackNav'
import SearchBar from '../../components/SearchBar'
import CategorySearch from '../../components/carousels/CategorySearch'

import './categoryList.css'

const CategoryList = ({history}) => {

    return (
        <div>
            <BackNav />
            <SearchBar />
            <h1>Category Page</h1>
            <CategorySearch />
        </div>
    )
}

export default CategoryList
