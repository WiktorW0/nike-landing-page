import {headerLogo} from '../assets/images'

import { navLinks } from '../constants'
import { useState } from 'react'


const Nav = () => {
  const [open,setOpen]=useState(false);
  return (
    <header className='padding-x py-8  w-full absolute z-20 max-lg:bg-[#ececfc]'>
      <nav className='flex justify-around items-center max-container '>
        <a href="/">
          <img src={headerLogo} alt="header-logo" width={130} height={29} />
        </a>
        <ul className={`max-lg:bg-opacity-90 max-lg:backdrop-blur-sm max-lg:bg-[#ececfc] bg-transparent flex lg:flex-1 max-lg:flex-col lg:gap-14 justify-center items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-24 ':'top-[-790px]'}`}>
          {navLinks.map((item)=>(
            <li key={item.label} className='ml-8 text-xl my-7 '>
              <a href={item.href} className='font-montserrat leading-normal text-lg max-lg:text-coral-red text-slate-gray hover:text-amber-700 duration-500'>{item.label}</a>
            </li>
          ))}
          <li className='ml-8 text-xl my-7'>
            <a href="#subscribe" className='font-montserrat leading-normal text-lg text-black font-semibold duration-500'>
            Sign in / Explore now
            </a>
          </li>
          
        </ul>
        <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer mr-1 pt-2 lg:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
      </nav>
    </header>
  )
}

export default Nav