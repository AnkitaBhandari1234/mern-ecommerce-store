import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { FaStar } from "react-icons/fa";


const Product = () => {
  
  const {productId}=useParams();
  const {products,currency}=useContext(ShopContext);
  const [productData,setproductData]=useState(false);
 const [image,setImage]=useState('');
 const [size,setSize]=useState('');
  const fetchProductData=async()=>{
    products.map((val,i)=>{
      if(val._id===productId){
        setproductData(val);
        console.log(val)
        setImage(val.image[0])
        return null;
      }

    })
    

  }
  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Product data==================== */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      
   
    {/* Products images */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
       {
        productData.image.map((val,i)=>{
          return(

            <img onClick={()=>{
              setImage(val)
            }}
            src={val} alt='' key={i} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
          )
        })
       }
      </div>
      <div className='w-full sm:w-[80%]'>
        <img src={image} alt='' className='w-full h-auto'/>

      </div>
      {/* product information-------------------------- */}
      

    </div>
      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-1'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-1'>
          <FaStar className='text-orange-600 text-sm' />
          <FaStar className='text-orange-600 text-sm' />
          <FaStar className='text-orange-600 text-sm' />
          <FaStar className='text-orange-600 text-sm' />
          <FaStar className='text-orange-200 text-sm' />
          <p className='pl-2'>(172)</p>

          </div>
          <p className='text-3xl mt-2 font-medium'>{currency}{productData.price}</p>
          <p className='text-gray-500 mt-3 w-4/5 '>{productData.description}</p>
          <div className='flex flex-col gap-3 my-4'>
            <p>Select Size</p>
            <div className='flex gap-2 '>
              {
                productData.sizes.map((val,i)=>{
                  return(
                    <button type='submit' key={i} className={`bg-gray-100 py-2 px-4 border ${val==size?'bg-orange-600 text-white':''}`} onClick={()=>{
                      setSize(val)
                    }}>{val}</button>
                  )
                })
              }

            </div>
            

          </div>
          <button type='submit' className='py-3 px-8 bg-black text-white text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-6 w-4/5'></hr>
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>

          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
                </div>
      </div>

    

     </div>
     {/* Description and review section */}
     
    </div>
  ):<div className='opacity-0'></div>
}

export default Product