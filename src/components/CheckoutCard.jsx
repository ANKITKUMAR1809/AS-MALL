import React from 'react'

export const CheckoutCard = (props) => {
  return (
    <div className='flex justify-around gap-2 rounded-md my-2 shadow-md p-2'>
        <div className="image w-[50px] h-auto object-cover">
            <img src={props.image} alt="" className='w-full h-full object-fill'/>
        </div>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div className='flex flex-col justify-start'>
            <h2>Price : &#8377;{props.price} </h2>
            <h2>Quan : {props.quantity}</h2>
            <hr />
            <h2>Total: {props.price*props.quantity}</h2>
        </div>
    </div>
  )
}
