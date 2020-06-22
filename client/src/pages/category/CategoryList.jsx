import React, {useContext} from 'react'

import BackNav from '../../components/navs/BackNav'
import SearchBar from '../../components/SearchBar'
import CategorySearch from '../../components/carousels/CategorySearch'
import { SearchContext } from '../../context/SearchContext'
import BottomNav from '../../components/navs/BottomNav'


const CategoryList = () => {
    const { userSearch } = useContext(SearchContext)

    return (
        <div>
            <BackNav/>
            <SearchBar/>
            <h1 id="dept-title">{userSearch && userSearch.searchKey}</h1>
            <CategorySearch />
            <BottomNav/>
        </div>
    )
}

export default CategoryList
