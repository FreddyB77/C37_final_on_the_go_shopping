import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

import nullImg from '../../assets/imgs/productUnavailable.jpg'

import './carousels.css'
const CategorySearch = () => {
    let history = useHistory()
    const { userSearch, handlePDPSearch } = useContext(SearchContext)

    return (
        <div className="category-search">
            {userSearch?.searchResult?.map(item => {
                return(
                    <div className="category-items" onClick={() => handlePDPSearch(item.upc, history) }>
                        <img 
                            className="cat-image" 
                            src={Boolean(item.image) ? item.image : nullImg} 
                            alt={`${item.title}`} 
                        />
                        <div className="cat-items-info">
                            <h1 className="item-price">${item.price}</h1>
                            <h1 className="item-name">{item.title}</h1>
                            <h5 className="item-location">{Math.floor(Math.random() * 105) + 1} Left in stock </h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategorySearch
