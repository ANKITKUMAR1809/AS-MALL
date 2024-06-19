import React, { useEffect, useState } from 'react';
import useCartContext from '../Contexts/Cart';
import { Link } from 'react-router-dom';
import { CartCard } from './Cart/CartCard';

const Cart = () => {
  const { cart, updateCart } = useCartContext();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setSum(total);
    } else {
      console.log("Nothing in your cart");
      setSum(0); // Reset the sum if the cart is empty
    }
  }, [cart, updateCart]);

  return (
    <div>
      <h1 className="text-3xl text-center text-blue-900">Your Cart</h1>
      <div className='flex flex-col justify-around py-4 items-center max-w-screen-lg m-auto'>
        {cart.map((product, i) => (
          <CartCard key={i} id={product.id} image={product.image} title={product.title} price={product.price} quantity={product.quantity} />
        ))}
      </div>

      <div className='max-w-screen-lg m-auto'>
        <hr className='h-1 my-4 rounded-md bg-blue-950' />
        <div className='flex flex-row justify-between items-center my-2'>
          <h1>Total Shopping Value of Your Cart -</h1>
          <h1>&#8377;{sum.toFixed(2)}</h1> {/* Fixed the number to 2 decimal places for better readability */}
        </div>
      </div>
      {
        cart.length>0?<div className="max-w-screen-lg m-auto flex justify-center items-center relative">
        <Link to='/checkout'><div className='text-xl bg-blue-900 text-white px-8 flex justify-center items-center rounded w-full'>Checkout</div></Link>
      </div>:""
      }
      
    </div>
  );
};

export default Cart;
