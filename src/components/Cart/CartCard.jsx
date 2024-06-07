import React from 'react'
import { Link } from 'react-router-dom'
export const CartCard = (props) => {

  return (
    <div className='flex justify-evenly items-center shadow-md w-3/4 my-4'>
      <Link to={`/product/${props.id}`}>
        <div className='w-[140px] h-[180px] '>
          <img src={props.image} alt={props.title} className='object-fill w-full h-full' />
        </div>
      </Link>
      <div className='w-[50%]'>
        <h2>{props.title}</h2>
        <h2>Price &#8377; {props.price}</h2>
      </div>

    </div>
  )
}
