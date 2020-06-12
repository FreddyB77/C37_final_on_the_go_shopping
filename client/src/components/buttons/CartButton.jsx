import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from '@material-ui/core'

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
                <h1>C </h1>
                <p>{cart.length}</p>
            </Button>
        </div>
    )
}

export default CartButton
