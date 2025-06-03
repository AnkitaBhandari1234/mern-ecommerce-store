import React from "react";
import { RiExchangeFundsFill } from "react-icons/ri";
import ReturnPolicy from '../assets/quality_icon.png';
import { LuHeadset } from "react-icons/lu";


const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20  text-xs sm:text-sm md:text-base text-gray-700">
      <div className="flex flex-col items-center">
        <RiExchangeFundsFill className="w-12 text-5xl text-black mb-5" />

        <h1 className="font-semibold text-base">Easy Exchange Policy</h1>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      
      <div className="flex flex-col items-center">
        <img src={ReturnPolicy} alt="" className="w-12 text-5xl text-black mb-5" />

        <h1 className="font-semibold text-base">7 Days Return Policy</h1>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
        <div className="flex flex-col items-center">
        <LuHeadset className="w-12 text-5xl text-black mb-5" />

        <h1 className="font-semibold text-base">Best customer support</h1>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
