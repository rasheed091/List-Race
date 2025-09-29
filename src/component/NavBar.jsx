import React from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function NavBar() {
  return (
    <>
      <div>
        <div className='flex place-content-between p-[30px] items-center'>
          <h1 className='text-[30px] font-bold'>List <span className='text-[red]'>Race</span></h1>
          <ul className=' md:flex gap-[35px] hidden'>
            <li>Home</li>
            <li> <a href="">How it Works</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Reviews</a></li>
            <li> <a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div className='md:hidden'>
            <FaBarsStaggered/>
          </div>
        </div>

      </div>
    </>
  )
}
