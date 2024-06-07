import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Mens from './components/Mens.jsx'
import Women from './components/Women.jsx'
import Cart from  './components/Cart.jsx'
import './index.css'
import { Layout } from './Layout.jsx'
import { Products } from './components/Products.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/men' element={<Mens/>} />
      <Route path='/women' element={<Women/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/product/:pId' element={<Products/>} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
