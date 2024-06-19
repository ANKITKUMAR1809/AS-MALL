import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useCartContext from '../Contexts/Cart'
import cartLogo from '../assets/cart.svg'
const Header = () => {
  const { cartCount, countCart, cart } = useCartContext()
  React.useEffect(() => {
    countCart()
  }, [cartCount, cart])

  return (
    <div className='shadow-md w-screen'>
      <div className='flex items-center justify-between px-8 py-5 w-full'>
        <h1 className='text-3xl font-bold text-blue-950'>AS MALL</h1>
        <div className=" flex items-center justify-around searchbar w-[30%] border-2 border-blue-950  rounded-md">
          <input type="search" className='w-[80%] px-4 py-1 border-none outline-none rounded-md' />
          <h3 className='cursor-pointer  text-blue-950 font-semibold'>Search</h3>
        </div>
        <ul className='flex justify-evenly w-[30%]'>
          <NavLink to="" ><li  className='text-blue-950 font-semibold text-[20px]'>Home</li> </NavLink>
          <NavLink to="/men" ><li  className='text-blue-950 font-semibold text-[20px]'>Men</li> </NavLink>
          <NavLink to="/women" ><li  className='text-blue-950 font-semibold text-[20px]'>Women</li></NavLink>
          <NavLink to="/cart" className='relative'><li className='text-blue-950 font-semibold text-[20px]'>Cart</li>  {cartCount > 0 ? <p className='absolute bottom-4 left-9 text-[15px] bg-blue-950 rounded-full text-white w-4 h-4 flex justify-center items-center'>{cartCount}</p> : ""}</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header