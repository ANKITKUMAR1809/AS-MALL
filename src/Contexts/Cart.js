import { createContext,useContext, useState } from "react";
export const CartContext=createContext(
    {
      cart:[{}],
      cartCount:0,
      addToCart:()=>{},
      countCart:()=>{},
      updateCart:()=>{},
      deleteCart:()=>{}
    }
)

export const CartProvider=CartContext.Provider

export default function useCartContext(){
    return useContext(CartContext)
}