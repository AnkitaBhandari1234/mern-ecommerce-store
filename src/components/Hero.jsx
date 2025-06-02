import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex sm:flex-row flex-col border-gray-400 border'>
        {/*  hero left section */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0  '>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='md:w-11 w-8  h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className=' text-3xl lg:text-5xl leading-relaxed prata-regular sm:py-3 '>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base '>SHOP NOW</p>
                    <p className=' w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* hero right section */}
        <img src={assets.hero_img} alt='' className='w-full sm:w-1/2'/>

    </div>
  )
}

export default Hero