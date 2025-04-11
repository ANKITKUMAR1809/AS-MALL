import React from 'react';
import { motion } from 'framer-motion';

export const CheckoutCard = ({ image, title, price, quantity }) => {
  return (
    <motion.div 
      className='flex items-center justify-between gap-4 bg-zinc-800 text-white rounded-2xl shadow-lg p-4 my-3 w-full max-w-2xl'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Product Image */}
      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 border border-zinc-700 shadow-md">
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>

      {/* Title + Quantity/Price */}
      <div className='flex flex-col flex-grow justify-center'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <div className="text-sm text-zinc-400 mt-1">Qty: {quantity}</div>
      </div>

      {/* Price Details */}
      <div className='text-right'>
        <h2 className='text-sm text-zinc-400'>Price</h2>
        <p className='text-base font-medium'>&#8377;{price.toFixed(2)}</p>
        <h2 className='text-sm text-zinc-400 mt-2'>Total</h2>
        <p className='text-lg font-semibold text-green-400'>&#8377;{(price * quantity).toFixed(2)}</p>
      </div>
    </motion.div>
  );
};
