import React, {useContext} from 'react'
import { LocationContext } from '../../context/LocationContext'
import { Button } from '@material-ui/core'

import './nav.css'
import CartButton from '../buttons/CartButton'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const HomeNav = () => {
    const { grocery, primaryStore } = useContext(LocationContext)
    return (
        <div className="home-nav nav-shadow"> 
            <div>
                <h1 id="home-OTG-title">On-the-Go</h1>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <p id="home-store">{primaryStore}</p>
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <div className="home-store-container">
                            {grocery?.map(store => <Button>{store.name}</Button>)}
                        </div>
                        </ExpansionPanelDetails>
                </ExpansionPanel>

            </div> 
            <div>
                <CartButton/>
            </div>
        </div>
    )
}

export default HomeNav
