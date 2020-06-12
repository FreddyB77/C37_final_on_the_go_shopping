import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import './explore.css'

import BackNav from '../../components/navs/BackNav'
import BottomNav from '../../components/navs/BottomNav'
import SearchBar from '../../components/SearchBar'
import ViewAllButton from '../../components/buttons/ViewAllButton'


const Explore = ({history}) => {
    const { cart } = useContext(CartContext)
    const department = [
        {
            dept: 'Dairy',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },
        {
            dept: 'Meat & Seafood',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },
        {
            dept: 'Dairy',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },
        {
            dept: 'Produce',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },
        {
            dept: 'Snacks',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        }

    ]


    const Department = () => {
        return(
            <>
            <h1 id="dept-title">Departments</h1>
            {department?.map(dept => { return(
                <div className="dept-category-container">
                    <div className="dept-category">
                        <h1>{dept.dept}</h1>
                        <ViewAllButton />
                    </div>

                    <p class="dept-aisle">Aisle {Math.floor(Math.random() * 30)}</p>

                    <div className="dept-category-carousel">
                        {dept.items?.map(items => { return(
                                <div className="category-carousel-item">
                                    <img src={"https://picsum.photos/100/100"}/>
                                    <p>{items}</p>
                                </div>
                            )})
                        }
                        
                    </div>
                    <hr class="dept-category-divider"></hr>
                </div>
                )}
            )}
            </>
        )
    }

    return (
        <div>
            <BackNav history={history}/>
            <SearchBar />
            <Department />
            <BottomNav history={history}/>
        </div>
    )
}

export default Explore
