import React from 'react'
import useProductCategory from '../Hooks/useProductCategory'
import Card from './Home/Card'
const Mens = () => {
  const categoryData = useProductCategory("men's clothing")
  return (
    <div className='flex flex-col'>
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