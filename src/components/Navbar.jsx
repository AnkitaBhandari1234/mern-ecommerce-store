import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


// useLocation means home page '/' this

const Navbar = () => {
  // for apperance of hr bar below the nav list item when clicked
  const [activeIndex, setActiveIndex] = useState(null);

  // set the hr in home page
  useEffect(() => {
    const index = navitem.findIndex((item) => item.path === location.pathname);
    setActiveIndex(index);
  }, [location.pathname]);

  // to appear the hamburger content
  const [visible,setVisible]=useState(false);

  const navitem = [
    {
      title: "Home",

      path: "/",
    },
    {
      title: "Collection",

      path: "/collection",
    },
    {
      title: "About",

      path: "/about",
    },
    {
      title: "Contact",

      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      {/* for image */}
      <img src={assets.logo} alt="logo" className="w-36"></img>

      {/* for nav list item */}
      <ul className=" hidden sm:flex items-center text-sm text-gray-700 gap-5 ">
        {navitem.map((val, i) => {
          return (
            <li key={i}>
              <Link
                to={val.path}
                onClick={() => {
                  setActiveIndex(i);
                }}
                className="flex items-center flex-col gap-1 relative"
              >
                {val.title}
                {activeIndex === i ? (
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 absolute top-[22px]  "></hr>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* right section */}
      <div className="flex items-center gap-6">
        <GoSearch className="text-2xl cursor-pointer " />

        {/* profile */}
        <div className="group relative ">
          <IoPersonOutline className="text-2xl font-bold cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 duration-300">
            <div className="flex flex-col gap-2 w-36 py-5 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        {/* card link */}
        <Link to="/cart" className="relative">
          <IoBagOutline className="text-2xl " />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        {/* hamburger menu */}

           {/* here sm:hidden means hamburger icon is hidden when screen is larger */}
        <RxHamburgerMenu className="text-2xl cursor-pointer sm:hidden " onClick={()=>{setVisible(true)}} />
          {
            // here sm:hidden means ham burger content is hidden when screen is large
            visible?<div className="absolute top-0 left-0 w-5/12 h-screen bg-gray-400 sm:hidden ">
              <div className=" px-4 py-8 flex flex-col gap-5   ">
                <div className="flex items-center justify-between">

              <img src={assets.logo} alt="" className="w-24"/>
              <IoMdClose className="text-xl cursor-pointer" onClick={()=>{setVisible(false)}} />
                </div>

                {/* link list */}
                <div className="flex flex-col uppercase font-sans font-medium tracking-wide gap-3">

                <Link onClick={()=>{setVisible(false)}} to='/' className="pl-4 hover:font-bold duration-300">Home</Link>
                <Link onClick={()=>{setVisible(false)}} to='/collection' className="pl-4 hover:font-bold duration-300">Collection</Link>
                <Link onClick={()=>{setVisible(false)}} to='/about' className="pl-4 hover:font-bold duration-300">About</Link>
                <Link onClick={()=>{setVisible(false)}} to='/contact' className="pl-4 hover:font-bold duration-300">Contact</Link>
                </div>


              </div> 
            
            </div>:null
          }


      </div>
    </div>
  );
};

export default Navbar;
