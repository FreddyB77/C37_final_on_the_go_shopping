import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { CartContext } from '../context/CartContext'
import './home.css'
import BottomNav from './BottomNav'


const Home = ({history}) => {
    const { cart } = useContext(CartContext)

    const handleScan = () => {
        history.push("/scan")
    }

    const vh = window.innerHeight * .01;
    console.log(cart)
    return (
        <div className="home-container" style={{height:`calc((${vh}, 1vh) * 100 )`}}>
            <div className="home-nav"> 
                <h1>On-the-Go</h1>
                <h1>Cart</h1>
            </div>

            <div className="home-shop-button">
                <Button 
                    id="home-shop-button"
                    onClick={handleScan}
                >
                    <div>
                        <h1>Shop & Scan</h1>
                        <p> Start Here</p>
                    </div>
                    <div>
                        <h1>IMG</h1>
                    </div>
                </Button>
            </div>


            <div className="home-item">
                <div class="home-item-banner">
                    <h3>Featured</h3>
                    <h3>View All</h3>
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
