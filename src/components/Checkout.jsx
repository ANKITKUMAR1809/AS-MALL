import React from 'react';
import { motion } from 'framer-motion';
import useCartContext from '../Contexts/Cart';
import { CheckoutCard } from './CheckoutCard';

export const Checkout = () => {
  const { cart } = useCartContext();
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setSum(total);
    } else {
      setSum(0);
    }
  }, [cart]);

  return (
    <div className="max-w-4xl mx-auto my-6 px-4 py-6 rounded-lg bg-zinc-900 text-white shadow-lg space-y-6">

      <motion.h1 
        className="text-3xl font-bold text-center text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Checkout
      </motion.h1>

      {/* Address Form */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-blue-400">Address & Detail</h2>

        <div className="grid gap-3 md:grid-cols-2">
          <input type="text" placeholder="Full Name" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="email" placeholder="Email Address" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="tel" placeholder="Contact Number" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none md:col-span-2" />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <input type="text" placeholder="Apartment / Flat No." className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="text" placeholder="Street / Locality" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="text" placeholder="Landmark" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="text" placeholder="State" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="text" placeholder="City" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
          <input type="text" placeholder="Postal Code" className="p-2 bg-zinc-800 rounded border border-zinc-700 focus:outline-none" />
        </div>
      </motion.div>

      {/* Cart Items */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-blue-400">Products in Your Cart</h2>
        {cart.map(item => (
          <CheckoutCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </motion.div>

      <hr className="border-t border-zinc-700" />

      {/* Summary */}
      <div className="flex justify-between text-lg font-semibold">
        <span>Total amount:</span>
        <span>&#8377;{sum.toFixed(2)}</span>
      </div>

      {/* COD Checkbox */}
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="cod" className="accent-blue-600" required />
        <label htmlFor="cod" className="text-sm">Cash On Delivery</label>
      </div>

      {/* Place Order */}
      {cart.length > 0 && (
        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-700 text-white text-xl px-8 py-2 rounded-md shadow-md hover:bg-blue-800 transition-all w-full md:w-1/2"
          >
            Place Order
          </motion.button>
        </div>
      )}
    </div>
  );
};
