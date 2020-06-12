import React from 'react'
import BackArrow from '../buttons/BackArrow'
import './nav.css'


const BackNav = ({history}) => {

    return(
        <>
        <div className='backNav-container'>
            <div className='backNav-control'>
                <BackArrow history={history} />
                <div>Cart <span>3</span></div>
            </div>
        </div>
        </>
    )

}

export default BackNav;
