import React, {useState} from 'react'
import { Button } from '@material-ui/core'


const Instructions = ({history}) => {
    const [page, setPage] = useState(0)

    const handleSkip = () => {
        history.push('/home')
    }

    const Skip = () => {
        return(
            <div>
                <Button 
                    id="iNav-skip" 
                    onClick={handleSkip}
                >
                    Skip
                </Button>
            </div>
        )
    }

    const SlideOne = () => {
        return(
            <div className="iSlide">
                <h1>Shop</h1>
                <img src={'https://picsum.photos/200/300'} />
                <p>Find stores near you and brind your eco-friendly reusable bag for sustanability</p>
                <div className="iSlide-pageNum">
                    <div class="iSlide-active iSlide-stat"/>
                    <div class="iSlide-stat"/>
                    <div class="iSlide-stat"/>
                </div>
            </div>
        )
    }
    const SlideTwo = () => {
        return(
            <div className="iSlide">
                <h1>Scan</h1>
                <img src={'https://picsum.photos/200/300'} />
                <p>Locate items by aisles and scan barcode from your phone</p>
                <div className="iSlide-pageNum">
                    <div class="iSlide-stat"/>
                    <div class="iSlide-active iSlide-stat"/>
                    <div class="iSlide-stat"/>
                </div>
            </div>
        )
    }
    const SlideThree = () => {
        return(
            <div className="iSlide">
                <h1>Checkout</h1>
                <img src={'https://picsum.photos/200/300'} />
                <p>Stay safe with a contactless checkout-free experience</p>
                <div className="iSlide-pageNum">
                    <div class="iSlide-stat"/>
                    <div class="iSlide-stat"/>
                    <div class="iSlide-active iSlide-stat"/>
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
