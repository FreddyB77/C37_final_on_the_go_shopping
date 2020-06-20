import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core'

import './instructions.css'
import shopImg from '../../assets/imgs/onBoarding/shop.png'
import scanImg from '../../assets/imgs/onBoarding/scan.png'
import paymentImg from '../../assets/imgs/onBoarding/payment.png'

const Instructions = () => {
    let history = useHistory()
    
    const handleSkip = () => {
        history.push('/login')
    }

    const Skip = () => {
        return(
            <div>
                <Button 
                    id="gStarted-button"
                    onClick={handleSkip}
                >
                    Let's begin!
                </Button>
            </div>
        )
    }

    const SlideOne = () => {
        return(
            <div className="iSlide">
                <h1>Shop</h1>
                <img src={shopImg} alt="Find item"/>
                <p>Find items in the store</p>
                <div className="iSlide-pageNum">
                    <div className="iSlide-active iSlide-stat"/>
                    <div className="iSlide-stat"/>
                    <div className="iSlide-stat"/>
                </div>
            </div>
        )
    }
    const SlideTwo = () => {
        return(
            <div className="iSlide">
                <h1>Scan</h1>
                <img src={scanImg} alt="Scan item"/>
                <p>Scan your items</p>
                <div className="iSlide-pageNum">
                    <div className="iSlide-stat"/>
                    <div className="iSlide-active iSlide-stat"/>
                    <div className="iSlide-stat"/>
                </div>
            </div>
        )
    }
    const SlideThree = () => {
        return(
            <div className="iSlide">
                <h1>Checkout</h1>
                <img src={paymentImg}  alt="Pay for items"/>
                <p>Pay from your phone</p>
                <div className="iSlide-pageNum">
                    <div className="iSlide-stat"/>
                    <div className="iSlide-stat"/>
                    <div className="iSlide-active iSlide-stat"/>
                </div>
            </div>
        )
    }


    return (
        <div className="instruction">
            <div className="iCarousel">
                <SlideOne />
                <SlideTwo />
                <SlideThree />
            </div>
            <span id="iSkip-button">
                <Skip />
            </span>
        </div>
    )
}

export default Instructions
