import React from 'react'
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import C4 from "../assets/c4.png";
import { FaRegStar } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';


export default function Clients() {
    const ourClients =[
        {
            img: C2,
            Name: 'Tom Leaker',
            Country: 'London, UK',
            Reviews: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro error assumenda quae esse sed repellat aliquid facilis! Amet, quia soluta? Obcaecati commodi aut quibusdam tempora quia',  
        },
        {
            img: C3,
            Name: 'Tom Leaker',
            Country: 'London, UK',
            Reviews: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro error assumenda quae esse sed repellat aliquid facilis! Amet, quia soluta? Obcaecati commodi aut quibusdam tempora quia',  
        },
        {
            img: C4,
            Name: 'Tom Leaker',
            Country: 'London, UK',
            Reviews: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro error assumenda quae esse sed repellat aliquid facilis! Amet, quia soluta? Obcaecati commodi aut quibusdam tempora quia',  
        }
    ]
  return (
    <>
        <div className='w-screen mt-[50px] flex flex-col gap-7 justify-center items-center'>
            <h1 className='text-[28px] font-light text-[#272626]'>Clients Reviews</h1>
            <p className='text-[18px] text-[#6d6b6b]'>What our clients says about us</p>
        </div> 
        <div className='flex items-center justify-center gap-[20px] shadow mb-[15%]'>
            {
                ourClients.map((Clients)=>(
                    <div className='w-[30%] p-[50px] flex shadow bg-white gap-5'>
                        <img src={Clients.img} alt="" />
                        <div>
                            <h1 className='text-[17px] font-bold text-[#4b4949] ' style={{fontFamily: "Poppins", }}>{Clients.Name}</h1>
                            <h2 className='text-[#7c7c7c]'>{Clients.Country}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </>
  )
}

