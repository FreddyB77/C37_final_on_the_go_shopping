import React from 'react'


import BackNav from '../../components/navs/BackNav'
import BottomNav from '../../components/navs/BottomNav'
import SearchBar from '../../components/SearchBar'
import Departments from '../../components/carousels/Departments'

const Explore = ({history}) => {
    
    return (
        <div>
            <BackNav history={history}/>
            <SearchBar history={history}/>
            <Departments history={history}/>
            <BottomNav history={history}/>
        </div>
    )
}

export default Explore
