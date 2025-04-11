import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../Contexts/Cart';
import { motion } from 'framer-motion';

export const CartCard = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const { updateCart, deleteCart } = useCartContext();

  const addQuantity = (id) => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(id, newQuantity);
  };

  const subQuantity = (id) => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      deleteCart(id);
    } else {
      setQuantity(newQuantity);
      updateCart(id, newQuantity);
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-4 items-center justify-between w-full md:w-3/4 mx-auto bg-zinc-900 text-white rounded-md shadow-md p-4 transition-all"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <Link to={`/product/${props.id}`} className="w-full md:w-[140px] h-auto rounded overflow-hidden">
        <img 
          src={props.image} 
          alt={props.title} 
          className="object-contain w-full h-full hover:scale-105 transition-transform duration-200" 
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-col gap-2 w-full md:w-[60%]">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="text-blue-400">Price: &#8377;{props.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mt-1">
          <span className="text-sm text-gray-300">Quantity:</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => subQuantity(props.id)} 
              className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded shadow"
            >-</button>
            <span>{quantity}</span>
            <button 
              onClick={() => addQuantity(props.id)} 
              className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded shadow"
            >+</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
