import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={`/product/${props.pId}`}>
    <div className='flex flex-col p-4 my-4 justify-around items-center shadow-md w-[300px] h-[420px] hover:scale-[1.03]'>
      <div className='absolute'></div>
      <div className='w-[200px] h-[300px]'>
        <img className='w-full object-contain' src={props.img} alt="" />
      </div>
        <h3 className='text-[18px] text-wrap text-center'>{props.title}</h3>
        <p className='font-semibold'>&#8377; {props.price}</p>
    </div>
    </Link>
  )
}

export default Card