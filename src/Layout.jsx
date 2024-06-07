import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './Contexts/Cart'
export const Layout = () => {
  const [cart,setCart]=React.useState([])
  const [cartCount,setCartCount]=React.useState(0)
  const addToCart=(id,quantity,price,title,image)=>{
    setCart((prev)=>[{ id: id, quantity:quantity,price:price,title:title,image:image }, ...prev])
  }
  const countCart=()=>{
    setCartCount(cart.length)
  }
  useEffect(() => {
    
  }, [cart])
  
  return (
    <>  
        <CartProvider value={{cart,addToCart,countCart,cartCount}}>
        <Header/>
        <Outlet/>
        <Footer/>
        </CartProvider>
    </>
  )
}
