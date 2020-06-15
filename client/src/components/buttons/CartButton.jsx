import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from '@material-ui/core'
import cartImg from '../../assets/imgs/cartLogo/cart.png'



const CartButton = ({history}) => {
    const { cart } = useContext(CartContext)

    const handleClick = () => {
        history.push("/cart")
    }

    return (
        <div>
            <Button
                className="button-cart"
                onClick={handleClick}
            >
                <img src={cartImg} alt="Cart image"/>
                <p>{cart.length}</p>
            </Button>
        </div>
    )
}

export default CartButton
