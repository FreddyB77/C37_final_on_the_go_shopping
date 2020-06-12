import React from 'react'
import BackArrow from '../../components/buttons/BackArrow'
import mapLogo from '../../assets/imgs/storeLocation/mapLogo.png'
import ShareLocationButton from '../../components/buttons/ShareLocationButton'
import ZipCodeButton from '../../components/buttons/ZipCodeButton'
import OnBoardNav from '../../components/navs/OnboardNav'

import './location.css'

const LocationOne = ({history}) => {
    return (
    <>
        <OnBoardNav history={history} step={"3/3"}/>
        <div className="lOne-container">
            <div className="lOne-text">
                <h1 id="lOne-title">Store Location</h1>
                <h2>Finally, tell us where you're shopping to:</h2>
            </div>

            <img src={mapLogo} alt="Logo: stores Near Me"/>

            <div class="lOne-button-container">
                <ShareLocationButton history={history} id="oShareLocation"/>
                <ZipCodeButton history={history} id="oZipCode"/>
            </div>
        </div>
    </>

    )
}

export default LocationOne
