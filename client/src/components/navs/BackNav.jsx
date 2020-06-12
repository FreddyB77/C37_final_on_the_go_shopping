import React from 'react'
import BackArrow from '../buttons/BackArrow'
import './nav.css'

import CartButton from '../buttons/CartButton'

const BackNav = ({history}) => {

    return(
        <>
        <div className='backNav-container'>
            <div className='backNav-control'>
                <BackArrow history={history} />
                <CartButton history={history}/>
            </div>
        </div>
        </>
    )

}

export default BackNav;
