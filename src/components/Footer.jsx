import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='h-[300px] w-full flex flex-col items-center justify-evenly'>
      <div className='w-full flex flex-row items-center justify-around'>

        <div className="left">
          <Link to="" className='text-[18px] text-blue-950 px-4'>Home</Link>
          <Link to="/men" className='text-[18px] text-blue-950 px-4'>Men</Link>
          <Link to="/women" className='text-[18px] text-blue-950 px-4'>Women</Link>
        </div>

        <div className="right flex flex-col items-center justify-between" >
          <h1 className='text-blue-950 text-2xl my-2'>Subscribe to Newsletter</h1>
          <input type="text" placeholder='youremail@gmail.com' className='px-8 py-2 outline-none border-2 ' />
          <button className='outline-none border-none bg-blue-950 text-white w-full my-2 rounded-md p-1'>Subscribe</button>
        </div>

      </div>
      <div className="flex flex-row items-center justify-center">
        <h2 className='text-[23px] text-blue-950 px-4'>SAK © AK THE PROGRAMMER </h2>
      </div>
    </div>
  )
}

export default Footer