import React, { createContext, useState } from 'react'
import { products } from '../assets/assets';
 export const ShopContext=createContext();

 const ShopContextProvider=(props)=>{

    const currency='Rs';
    const delivery_fee=10;
    const [search,setsearch]=useState([]);
    const[showSearch,setshowSearch]=useState(false);
    const [cartItem,setcardItem]=useState({});

    const addToCart=async(itemId,size)=>{
        let cartData=structuredClone(cartItem);

    }

    const value={
         products,currency,delivery_fee,
         search,setsearch,showSearch,setshowSearch
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }
 export default ShopContextProvider;

