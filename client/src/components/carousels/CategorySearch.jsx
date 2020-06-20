import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

import nullImg from '../../assets/imgs/productUnavailable.jpg'

import './carousels.css'
const CategorySearch = () => {

    const { userSearch } = useContext(SearchContext)

    return (
        <div className="category-search">
            {console.log(Boolean(userSearch.searchResult[0].image.length))}
            {userSearch.searchResult.map(item => {
                console.log("Hello", Boolean(item.image))
                return(
                    
                    <div className="category-items">
                        <img 
                            className="cat-image" 
                            src={Boolean(item.image) ? item.image : nullImg} 
                            alt={`${item.title} image`} 
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
