import React, { useContext } from 'react'
import ViewAllButton from '../buttons/ViewAllButton'

import { CartContext } from '../../context/CartContext'

import './carousels.css'
import avocado from '../../assets/imgs/departmentImg/avocado.png'
import bananas from '../../assets/imgs/departmentImg/bananas.png'
import beef from '../../assets/imgs/departmentImg/beef.png'
import butter from '../../assets/imgs/departmentImg/butter.png'
import cheese from '../../assets/imgs/departmentImg/cheese.png'
import chicken from '../../assets/imgs/departmentImg/chicken.png'
import chips from '../../assets/imgs/departmentImg/chips.png'
import chocolate from '../../assets/imgs/departmentImg/chocolate.png'
import cookies from '../../assets/imgs/departmentImg/cookies.png'
import crackers from '../../assets/imgs/departmentImg/crackers.png'
import eggs from '../../assets/imgs/departmentImg/eggs.png'
import limes from '../../assets/imgs/departmentImg/limes.png'
import milk from '../../assets/imgs/departmentImg/milk.png'
import oranges from '../../assets/imgs/departmentImg/oranges.png'
import seafood from '../../assets/imgs/departmentImg/seafood.png'
import turkey from '../../assets/imgs/departmentImg/turkey.jpeg'


const Departments = ({history}) => {
    const { handleSearch } = useContext (CartContext)

    const department = [
        {
            dept: 'Dairy',
            items: [{
                name: "Butter",
                img: butter
            },{
                name: "Eggs",
                img: eggs,
            },{
                name: "Milk",
                img: milk
            },{
                name: "Cheese",
                img: cheese
            }]
        },{
            dept: 'Meat & Seafood',
            items: [{
                name: "Chicken",
                img: chicken
            },{
                name: "Turkey",
                img: turkey,
            },{
                name: "Beef",
                img: beef
            },{
                name: "Seafood",
                img: seafood
            }]
        },{
            dept: 'Produce',
            items: [{
                name: "Bananas",
                img: bananas
            },{
                name: "Oranges",
                img: oranges,
            },{
                name: "Limes",
                img: limes
            },{
                name: "Avocado",
                img: avocado
            }]
        },{
            dept: 'Snacks',
            items: [{
                name: "Chips",
                img: chips
            },{
                name: "Candy",
                img: chocolate,
            },{
                name: "Cookies",
                img: cookies
            },{
                name: "Crackers",
                img: crackers
            }]
        }]

    return(
        <>
        <h1 id="dept-title">Departments</h1>
        {department?.map(dept => { return(
            <div className="dept-category-container">
                <div className="dept-category">
                    <h1>{dept.dept}</h1>
                    <ViewAllButton />
                </div>

                <p className="dept-aisle">Aisle {Math.floor(Math.random() * 30)}</p>

                <div className="dept-category-carousel">
                    {dept.items?.map((items, key) => { return(
                            <div key={`${items.name}-${key}`} 
                                className="category-carousel-item"
                                onClick={e => handleSearch(items.name, history)}
                            >
                                <img className="category-carousel-img" src={items.img}/>
                                <p>{items.name}</p>
                            </div>
                        )})
                    }
                </div>

                <hr className="dept-category-divider"></hr>
            </div>
            )}
        )}
        </>
    )
}

export default Departments
