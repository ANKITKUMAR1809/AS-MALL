import React from 'react'
import useProductCategory from '../Hooks/useProductCategory'
import Card from './Home/Card'
import homeBanner from '../assets/homeBanner.jpg'
const Home = () => {

  const categoryData = useProductCategory("men's clothing")
  const womenCategory = useProductCategory("women's clothing")
  const electronicCategory = useProductCategory("electronics")
  const jeweleryCategory = useProductCategory("jewelery")
  return (
    <div className='flex flex-col my-8 px-8'>
      <div className="banner w-full h-[400px] my-4 ">
        <img src={homeBanner} className='h-full w-full object-cover shadow-md' alt="" />
      </div>
      <h2 className='text-2xl my-4 text-blue-950'>Men's Special Edition</h2>
      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {categoryData.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <h2 className='text-2xl my-4 text-blue-950'>Women's Special Edition</h2>
      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {womenCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      {/* electronics */}
      <h2 className='text-2xl my-4 text-blue-950'>Electronics Collections</h2>
      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {electronicCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>

      <h2 className='text-2xl my-4 text-blue-950'>Jewelery Collections</h2>
      <div className='flex flex-row flex-wrap justify-evenly items-center'>
        {jeweleryCategory.map((product) => <Card key={product.id} pId={product.id} img={product.image} title={product.title} price={product.price} />)}
      </div>
    </div>
  )
}

export default Home;