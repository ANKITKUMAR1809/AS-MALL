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
      setSum(0);
    }
  }, [cart, updateCart]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">🛒 Your Cart</h1>

      <div className="flex flex-col gap-4 items-center max-w-4xl mx-auto">
        {cart.length > 0 ? (
          cart.map((product, i) => (
            <CartCard
              key={i}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          ))
        ) : (
          <p className="text-lg text-gray-400">Your cart is currently empty.</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="max-w-4xl mx-auto mt-10">
          <hr className="h-1 my-6 bg-blue-700 rounded" />
          <div className="flex flex-row justify-between items-center text-lg font-medium">
            <h2>Total Shopping Value:</h2>
            <h2>&#8377;{sum.toFixed(2)}</h2>
          </div>

          <div className="mt-8">
            <Link to="/checkout">
              <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
