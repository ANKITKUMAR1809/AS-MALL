import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { CartProvider } from './Contexts/Cart'
import { Header2 } from './components/Header2'
export const Layout = () => {
  const [cart, setCart] = React.useState([])
  const [cartCount, setCartCount] = React.useState(0)
  const addToCart = (id, quantity, price, title, image) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [{ id, quantity, price, title, image }, ...prev];
      }
    });
  }
  const updateCart = (id, quantity) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity:quantity } : item
        );
      }
    });
  }
  const deleteCart=(id)=>{
    setCart((prev) => prev.filter((prevItem) => prevItem.id !== id))
  }
  const countCart = () => {
    setCartCount(cart.length)
  }
  useEffect(() => {

  }, [cart])

  return (
    <>
      <CartProvider value={{ cart, addToCart, countCart, cartCount, updateCart,deleteCart }}>
        {/* <Header/> */}
        <Header2 />
        <Outlet />
        <Footer/>
      </CartProvider>
    </>
  )
}
