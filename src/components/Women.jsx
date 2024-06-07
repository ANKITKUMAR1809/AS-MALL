import React from 'react'
import useProductCategory from '../Hooks/useProductCategory'
import Card from './Home/Card'
import womenBanner from '../assets/womenBanner.jpg'
const Women = () => {
  const womenCategory = useProductCategory("women's clothing")
  return (
    <div className=' flex flex-col'>
      <div className="banner w-full h-[400px] my-4 ">
        <img src={womenBanner} className='h-full w-full object-cover shadow-md' alt="" />
      </div>
      <h2 className='text-2xl m-4 text-blue-950'>Women's Collection</h2>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {womenCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {womenCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {womenCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {womenCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {womenCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>
    </div>
  )
}

export default Women