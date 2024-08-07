import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useCartContext from '../Contexts/Cart'
import './Css/Header.module.css'
export const Header2 = () => {
    const { cartCount, countCart, cart } = useCartContext()
    React.useEffect(() => {
        countCart()
    }, [cartCount, cart])
    return (
        <div className=''>
            <div className='w-full flex flex-wrap flex-row justify-between items-center shadow-md py-4 px-2'>
                <h1 className='max-[600px]:w-full text-center text-3xl font-bold text-blue-950'>AS MALL</h1>
                <div className="max-[600px]:w-full flex items-center justify-around searchbar border-2 border-blue-950  rounded-md">
                    <input type="search" className=' px-4 py-1 border-none outline-none rounded-md' />
                    <h3 className='cursor-pointer  text-blue-950 font-semibold'>Search</h3>
                </div>
                <ul className='max-[600px]:w-full  flex justify-evenly gap-2'>
                    <NavLink to="" ><li className='text-blue-950 font-semibold text-[20px]'>Home</li> </NavLink>
                    <NavLink to="/men" ><li className='text-blue-950 font-semibold text-[20px]'>Men</li> </NavLink>
                    <NavLink to="/women" ><li className='text-blue-950 font-semibold text-[20px]'>Women</li></NavLink>
                    <NavLink to="/cart" className='relative'><li className='text-blue-950 font-semibold text-[20px]'>Cart</li>  {cartCount > 0 ? <p className='absolute bottom-4 left-9 text-[15px] bg-blue-950 rounded-full text-white w-4 h-4 flex justify-center items-center'>{cartCount}</p> : ""}</NavLink>
                </ul>
            </div>

        </div>
    )
}
