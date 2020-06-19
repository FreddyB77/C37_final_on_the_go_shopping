import React, {useContext} from 'react'

import BackNav from '../../components/navs/BackNav'
import SearchBar from '../../components/SearchBar'
import CategorySearch from '../../components/carousels/CategorySearch'
import { SearchContext } from '../../context/SearchContext'
import BottomNav from '../../components/navs/BottomNav'

import './categoryList.css'
import '../../pages/explore/explore.css'

const CategoryList = ({history}) => {
    const { userSearch } = useContext(SearchContext)

    return (
        <div >
            <BackNav history={history}/>
            <SearchBar history={history}/>
            <h1 id="dept-title">{userSearch && userSearch.searchKey}</h1>
            <CategorySearch />
            <BottomNav history={history}/>
        </div>
    )
}

export default CategoryList
