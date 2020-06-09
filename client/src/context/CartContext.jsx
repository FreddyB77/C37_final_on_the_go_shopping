import React, { createContext, useState } from 'react'

const AppContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([
        {
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1
        }
    ])
    
    return(
        <AppContext.Provider value={{
            cart, setCart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, CartContextProvider }