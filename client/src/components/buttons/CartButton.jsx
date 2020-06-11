import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from '@material-ui/core'

const CartButton = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <Button
                className="button-cart">
                <h1>C </h1>
                <p>{cart.length}</p>
            </Button>
        </div>
    )
}

export default CartButton
