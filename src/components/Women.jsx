import React from 'react';
import useProductCategory from '../Hooks/useProductCategory';
import Card from './Home/Card';
import womenBanner from '../assets/womenBanner.jpg';
import { motion } from 'framer-motion';

const Women = () => {
  const womenCategory = useProductCategory("women's clothing");

  return (
    <div className='flex flex-col bg-zinc-900 text-white min-h-screen px-4 py-6'>
      <motion.div 
        className="banner w-full h-[400px] my-6 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={womenBanner} 
          className='h-full w-full object-cover rounded-2xl' 
          alt="Women's Banner" 
        />
      </motion.div>

      <motion.h2 
        className='text-3xl font-bold mb-6 text-pink-500'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Women's Collection
      </motion.h2>

      <div className='flex flex-wrap justify-center gap-6'>
        {womenCategory.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card 
              pId={product.id} 
              img={product.image} 
              title={product.title} 
              price={product.price} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Women;
