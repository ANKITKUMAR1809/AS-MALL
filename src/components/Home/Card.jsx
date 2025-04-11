import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link to={`/product/${props.pId}`}>
      <div className='relative flex flex-col justify-between items-center w-[200px] h-[370px] p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.03]'>
        
        {/* Product Image */}
        <div className='w-full h-[180px] flex items-center justify-center'>
          <img className='max-h-full object-contain' src={props.img} alt={props.title} />
        </div>

        {/* Product Info */}
        <div className='flex flex-col items-center gap-2 mt-4'>
          <h3 className='text-sm font-medium text-center line-clamp-2 text-black'>{props.title}</h3>
          <p className='text-lg font-semibold text-blue-800'>&#8377; {props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
