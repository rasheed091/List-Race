import React from 'react'
import eone from "../assets/e1.jpg";
import etwo from "../assets/e2.jpg";
import ethree from "../assets/e3.jpg";
import efour from "../assets/e4.jpg";
import efive from "../assets/e5.jpg";
import esix from "../assets/e6.jpg";
import "@fontsource/poppins";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import { BiDownload } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaHeartBroken } from 'react-icons/fa';

export default function Explore() {
  const eachExplore=[
    {
      Img: eone,
      Name: 'tommy helfinger bar',
      Ratings: '5.0',
      Form: '5$ -300$',
      Text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      Time: 'Close Now',
      Nums: '10 Ratings',
      Forms: 'Forms',
      why: 'Resturants',
      img: c1,
    },
    {
      Img: etwo,
      Name: 'tommy helfinger bar',
      Ratings: '5.0',
      Text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      Time: 'Open Now',
      Nums: '10 Ratings',
      Forms: 'Forms',
      why: 'Resturants',
      img: c1,
    },
    {
      Img: ethree,
      Name: 'tommy helfinger bar',
      Ratings: '4.0',
      Text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      Time: 'Close Now',
      Nums: '10 Ratings',
      Forms: 'Forms',
      why: 'Resturants',
      img: c1,
    },
    {
      Img: efour,
      Name: 'tommy helfinger bar',
      Ratings: '3.1',
      Text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      Time: 'Open Now',
      Nums: '10 Ratings',
      Forms: 'Forms',
      why: 'Resturants',
      img: c1,
    },
    {
      Img: efive,
      Name: 'tommy helfinger bar',
      Ratings: '5.1',
      Text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      Time: 'Close Now',
      Nums: '10 Ratings',
      Forms: 'Forms',
      why: 'Resturants',
      img: c1,
    },
    {
      Img: esix,
      Name: 'tommy helfinger bar',
      Ratings: '4.1',
      Text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      Time: 'Open Now',
      Span: '10k$-15$',
      Nums: '10 Ratings',
      Forms: 'Forms',
      why: 'Resturants',
      img: c1,
    },
  ]
  // const Rating =(Ratings)=>{
  // }
  function Rating(Ratings) {
    if (Ratings >=5.1) return'bg-blue-500'
    if(Ratings >= 4.1) return 'bg-green-500'
    if (Ratings >= 3.1) return'bg-purple-500'
    return 'bg-white'
    
  }
  const action =(Time)=>{
    if (Time == 'Close Now')return 'text-red-400'
    if (Time == 'Open Now')return 'text-green-400'
    return 'text-white'
  }
  return (
    <>
      <div className='bg-[#f8f6f6] justify-center items-center flex flex-col font-poppins'>
        <h1 className='uppercase text-[30px] mt-[10%]'>explore</h1>
        <p className='mt-[35px] mb-[70px]'>Explore New place, food, culture around the world and many more</p>
      <div className='flex-wrap flex gap-[30px] p-[15px] items-center justify-center text-red '>
        {
            eachExplore.map((Explores)=>(
              <div className='shadow font-poppins bg-white' >
                <img src={Explores.Img} alt="" className='w-fit' />
                <h1 className='font-semibold text-[13px] capitalize mt-4 px-5' >{Explores.Name}</h1>
                <div className='flex gap-2 mt-3 text-[#7c7b7b] text-[12px] p-2 '>
                  <div className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${Rating(Explores.Ratings)}`}>{Explores.Ratings}</div>
                  <p>{Explores.Nums} </p>
                  <p className='border-x px-2'>{Explores.Forms} <span className='text-red-600'>$5k-$50k</span></p>
                  <p>{Explores.why}</p>
                </div>
                <div className='flex gap-5 p-3'>
                  <img src={Explores.img} alt="" sizes='100'/>
                  <p className='text-[12px] text-[gray]'>Lorem ipsum dolor sit amet  elit. Facilis culpa <br /> animi voluptatum aperiam eveniet, soluta <br /> Voluptate unde praesentium assumenda</p>
                </div>
                <div className='border-t border-t-[#cecccc] py-5 px-5 flex place-content-between mt-8'>
                  <p className={`${action(Explores.Time)} text-[12px] place-content-between`}>{Explores.Time}</p>
                  <div className='flex gap-2 mb-[70px] '>
                    <BiDownload className=''/>
                    <HiOutlineLocationMarker />
                    <FaHeartBroken/>
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
      </div>
    </>
  )
}
