import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

import BackNav from '../../components/navs/BackNav'

import ScanButton from '../../components/buttons/ScanButton'
import nullImg from '../../assets/imgs/productUnavailable.jpg'
import './productDescriptionPage.css'


const ProductDescriptionPage = ({history}) => {
    const { scanSearch } = useContext(SearchContext)

    return (
        <div className='pdp-item-container'>
            <BackNav history={history}/>
            <img src={nullImg && scanSearch?.title} alt={`${scanSearch?.name}  `}/>
            <div className="pdp-item-stat">
                <h1 id="pdp-item-name">{scanSearch?.title}</h1>
                <p id ="pdp-item-size">{scanSearch?.size}</p>
                <p>${scanSearch?.price}</p>
                <p>Location in store: Aisle {Math.floor(Math.random() * 17)}</p>
                <p>In Stock: Qty {Math.floor(Math.random() * 100)}</p>
            </div>
            <ScanButton text="Scan"/>
        </div>
    )
}

export {ProductDescriptionPage}
