import React from 'react'
import ViewAllButton from '../buttons/ViewAllButton'

import './carousels.css'

const Departments = () => {
    const department = [{
            dept: 'Dairy',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },{
            dept: 'Meat & Seafood',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },{
            dept: 'Dairy',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },{
            dept: 'Produce',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        },{
            dept: 'Snacks',
            items: ["Butter", "Eggs", "Milk", "Cheese"]
        }

    ]

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
                            <div key={`${items}-${key}`} 
                                className="category-carousel-item">
                                <img src={"https://picsum.photos/100/100"}/>
                                <p>{items}</p>
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
