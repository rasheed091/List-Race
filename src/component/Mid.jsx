import React from 'react'
import {BiCurrentLocation} from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import {LuLogs} from 'react-icons/lu';


export default function Mid() {
  return (
    <>
      
      
      <div>
        <div className="bg-[url(assets/banner.jpg)] md:h-screen h-[80vh] ">
          <div className=' text-white text-center flex items-center justify-center h-[80vh] md:h-screen flex-col bg-[#3d3c3c8f]'>
            <h1 className='text-center md:text-[45px] text-[20px] font-bold uppercase tracking font-sans'>best place to find and explore<br/>that all you need</h1>
            <p className='md:text-[20px] font-semibold mt-2 text-[15px]'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
            <div className='md:flex items-center hidden'>
              <div className='border-2 text-black bg-white text-[15px] font-Poppins px-[30px] py-[20px] flex items-center mt-[80px]'>
                <p className='text-[20px] font-bold text-[#2b2828] '>What?<span className='text-[#a8a8a8] text-[15px] ml-[10px]'>Ex: Place, Resturant, Food, Automobile</span></p>
                <LuLogs className='size-[25px] ml-4 mr-4'/>
                <p className='text-[20px] font-bold text-[#2b2828]'>Location <span className='text-[#a8a8a8] text-[15px]'>Ex: London, NewYork, Rome </span></p>
                <BiCurrentLocation className='size-6 ml-[150px]'/>
              </div>
              <div className='border-2 text-black bg-[orangered] text-[15px] font-Poppins px-[30px] py-[23px] flex items-center mt-[80px] ml-[40px]'>
                <h1>Search</h1>
                <FaMagnifyingGlass className='ml-[30px]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}
