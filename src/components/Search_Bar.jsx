import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';



const Search_Bar = () => {
    
    const {search,setsearch,showSearch,setshowSearch}=useContext(ShopContext);
    const location=useLocation();
    const[visible,setVisible]=useState(false);
    useEffect(()=>{
        if(location.pathname.includes('collection') && showSearch){
            setVisible(true);
        }
        else{
            setVisible(false); 
        }
    },[location])
  return showSearch && visible? (
    <div className='border-t border-b bg-gray-50 text-center flex items-center justify-center gap-2'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-4 my-5 rounded-full sm:w-1/2 w-3/4 py-1.5'>
        <input value={search} onChange={(e)=>{setsearch(e.target.value)}} type='text' placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
        <CiSearch className='text-xl text-black ' />

        </div>
        <RxCross2 className='text-xl  text-gray-500 cursor-pointer' onClick={()=>{setshowSearch(false)}} />


    </div>
  ):null
}

export default Search_Bar