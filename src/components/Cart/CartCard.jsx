import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartContext from '../../Contexts/Cart'
export const CartCard = (props) => {
  const [quantity, setQuantity] = useState(props.quantity)
  const { updateCart,deleteCart } = useCartContext();
  const addQuantity = (id) => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(id, newQuantity);
  }
  const subQuantity = (id) => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      deleteCart(id);
    } else {
      setQuantity(newQuantity);
      updateCart(id, newQuantity);
    }
  }
  
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
        <h3 className='flex justify-evenly items-center'>Quantity <button className='shadow-md px-2' onClick={()=>subQuantity(props.id)}>-</button> {quantity} <button className='shadow-md px-2' onClick={()=>addQuantity(props.id)}>+</button></h3>
      </div>

    </div>
  )
}
