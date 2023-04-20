import React from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import logo from '.././assets/Logonetflix.png'

const Header = () => {


  return (
    <nav className="bg-black h-[70px] box-border flex items-center p-[1rem]  text-white">
 <Link to="/" className='h-[90%]'>
      <img src={logo} alt="Netflix" className='h-[100%]' />
    </Link>

   
      <ul className='w-[100%] ml-10 text-[1.1rem] font-normal'>
        <Link to='/tvShows' className='mr-10'>Tv Shows</Link>
        <Link to='/tvShows' className='mr-10'>Movies</Link>
        <Link to='/tvShows' className='mr-10'>Recently Added</Link>
        <Link to='/tvShows' className='mr-10'>My-list</Link>
      </ul>
      <ImSearch className='flex justify-end text-[1.5rem] cursor-pointer mr-2'/>

    </nav>
  )
}

export default Header