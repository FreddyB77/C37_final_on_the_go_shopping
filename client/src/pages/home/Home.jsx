import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { CartContext } from '../../context/CartContext'
import './home.css'

import BottomNav from '../../components/navs/BottomNav'
import HomeNav from '../../components/navs/HomeNav'
import ShopAndScanButton from '../../components/buttons/ShopAndScanButton'
import ViewAllButton from '../../components/buttons/ViewAllButton'

const Home = ({history}) => {
    const { cart } = useContext(CartContext)

    const vh = window.innerHeight * .01;
    console.log(cart)
    return (
        <div className="home-container" style={{height:`calc((${vh}, 1vh) * 100 )`}}>

            <HomeNav />
            <ShopAndScanButton history={history}/>
            
            <div className="home-item">
                <div class="home-item-banner">
                    <h1>Featured</h1>
                    <ViewAllButton />
                </div>
                <div class="home-carousel-container">
                    {cart && cart.map( item => {
                        return(
                            <div class="item-carousel">
                                <img src={"https://picsum.photos/100/100"}/>
                                <p className="item-price">${item.price}</p>
                                <p className="item-promo">Buy 1 Get 1 Free</p>
                                <p className="item-name">{item.name}</p>
                                <p className="item-location">Aisle {Math.floor(Math.random()*9)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            <BottomNav history={history}/>
        </div>
    )
}

export default Home
