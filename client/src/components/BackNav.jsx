import React from 'react'
import { Button } from '@material-ui/core'
import './backNav.css'


const BackNav = ({history}) => {

const handleBack = () => {
    history.goBack();
  }

    return(
        <>
        <div className='backNav-container'>
            <div className='backNav-control'>
                <Button onClick={handleBack}>BCK</Button>
                <div>Cart <span>3</span></div>
            </div>
        </div>
        </>
    )

}

export default BackNav;
