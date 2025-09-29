import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'
import { SiGooglemaps } from 'react-icons/si'
import { TbSettingsSearch } from 'react-icons/tb'

export default function How() {
    
    const howItWorks = [
        {
            Icon: FaRegLightbulb,
            Text1: 'Choose what to Do',
            Text2: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            Button: 'Read More',
        },
        {
            Icon: TbSettingsSearch,
            Text1: 'Choose what to Do',
            Text2: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            Button: 'Read More',
        },
        {
            Icon: SiGooglemaps,
            Text1: 'Choose what to Do',
            Text2: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            Button: 'Read More',
        },
    ]
  return (
    <>

    <div className='w-screen justify-center items-center flex-col flex p-[100px]'>
        <h1 className='text-[30px] uppercase '>how it works</h1>
        <p className='mt-[30px]'>Learn More about how our website works</p>
        <div className='md:flex justify-center items-center gap-7 '>
            {
                howItWorks.map((workseach)=>(
                    <div className='bg-white md:w-[30%] w-[100%] text-center items-center p-7 shadow group hover:bg-[orangered] my-[20px]'>
                        <workseach.Icon className='size-[80px] m-auto border-none rounded-[40px] p-[20px] bg-[#dbd6d6] '/>
                        <h1 className='text-[20px] mt-8 group-hover:text-white '>{workseach.Text1}</h1>
                        <p className='text-[14px] text-[gray] mt-[16px] group-hover:text-white'>{workseach.Text2}</p>
                        <button className='border p-1.5 mt-8 bg-white'>{workseach.Button}</button>
                    </div>
                )
            )
            }

        </div>
    </div>  
    </>
  )
}
