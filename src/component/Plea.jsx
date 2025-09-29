import React from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { BsCapsulePill } from 'react-icons/bs'
import { GiBackpack, GiCityCar, GiModernCity } from 'react-icons/gi'

export default function Plea() {
    const pleaItem = [
        {
            icon: AiOutlineShop,
            text1: 'Resturant',
            text2: '150 listings'
        },
        {
            icon: GiBackpack,
            text1: 'Resturant',
            text2: '150 listings'
        },
        {
            icon:   GiModernCity,
            text1: 'Resturant',
            text2: '150 listings'
        },
        {
            icon: BsCapsulePill,
            text1: 'Resturant',
            text2: '150 listings'
        },
        {
            icon: GiCityCar,
            text1: 'Resturant',
            text2: '150 listings'
        },
    ]
  return (
    <div className='md:flex justify-center items-center gap-10 mt-[-90px]  '>
        {
           pleaItem.map((eachPlea)=>(
            <div className='shadow-sm bg-white text-center md:w-[15%] w-[100%] p-7 my-[20px]'>
                <eachPlea.icon className= {`${eachPlea.icon} size-[40px] m-auto`}/>
                <h2 className='py-2 text-2xl'>{eachPlea.text1}</h2>
                <p>{eachPlea.text2}</p>
            </div>
           )
        ) 

        }
    </div>
  )
}
