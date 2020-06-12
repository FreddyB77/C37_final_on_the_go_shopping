import React from 'react'
import BackArrow from '../buttons/BackArrow'

const OnboardNav = ({history, step}) => {

    return (
    <div className='cAccount-nav'>
       <BackArrow history={history}/>
       <h1>Step {step}</h1>
    </div>
    )
}

export default OnboardNav