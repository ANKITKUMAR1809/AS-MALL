import React from 'react'
import useProductCategory from '../Hooks/useProductCategory'
import Card from './Home/Card'
import menBanner from '../assets/menBanner.jpg'
const Mens = () => {
  const categoryData = useProductCategory("men's clothing")
  return (
    <div className='flex flex-col'>
      <div className="banner w-full h-[400px] my-4 ">
        <img src={menBanner} className='h-full w-full object-cover shadow-md' alt="" />
      </div>
      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {categoryData.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {categoryData.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {categoryData.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {categoryData.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {categoryData.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>
    </div>
  )
}

export default Mens