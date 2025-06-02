import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {


    // getting products data using context API
const {products}=useContext(ShopContext);

// to add recently added 10 products
const[latestProducts,setLatestProducts]=useState([]);

// to load the 10 prodcuts from products from above products state
useEffect(()=>{
  setLatestProducts(products.slice(0,10))
},[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"Latest"} text2={"Collections"}/>
            <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>


        </div>


    </div>
  )
}

export default LatestCollection