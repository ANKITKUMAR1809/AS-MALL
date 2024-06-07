import React from 'react'
export const CartCard = (props) => {
    
  return (
    <div className='flex justify-evenly items-center shadow-md w-3/4 my-4'>
        <div className='w-[140px] h-[180px] '>
            <img src={props.image} alt={props.title} className='object-fill w-full h-full' />
        </div>
        <div className='w-[50%]'>
            <h2>{props.title}</h2>
            <h2>Price &#8377; {props.price}</h2>
        </div>

    </div>
  )
}
