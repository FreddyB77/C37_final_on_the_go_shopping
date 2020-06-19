import React from 'react'

import './nav.css'
import CartButton from '../buttons/CartButton'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const HomeNav = ({history}) => {
    return (
        <div className="home-nav nav-shadow"> 
            <div>
                <h1 id="home-OTG-title">On-the-Go</h1>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <p id="home-store">Store_Name</p>
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <div className="home-store-container">
                            <p>store 1</p>
                            <p>store 2</p>
                            <p>store 3</p>
                            <p>store 4</p>
                            <p>store 5</p>
                        </div>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> 
            <div>
                <CartButton history={history}/>
            </div>
        </div>
    )
}

export default HomeNav
