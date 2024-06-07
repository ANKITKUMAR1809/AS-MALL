import React, { useEffect, useState } from 'react';
import useAllProduct from '../Hooks/useAllProduct';
import { useParams } from 'react-router';
import useCartContext from '../Contexts/Cart';

export const Products = () => {
  const {addToCart}=useCartContext()
  const { pId } = useParams();
  const { allProducts, error } = useAllProduct();
  const [product, setProduct] = useState(null);
  const [descarr, setDescarr] = useState([])

  useEffect(() => {
    if (allProducts.length > 0) {
      const foundProduct = allProducts.find((e) => e.id === Number(pId));
      setDescarr(foundProduct.description.split(', '))
      setProduct(foundProduct);
    }
  }, [allProducts, pId,addToCart]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex flex-row p-8 justify-between'>
      <div className='px-4 shadow-md w-[600px] h-[400px]  '>
        <img src={product.image} alt={product.title} className='w-full h-full ' />
      </div>
      <div className='px-8'>
        <h1 className='text-blue-950 text-2xl'>{product.title}</h1>
        <h2 className='text-blue-900'>{product.category.toUpperCase()}</h2>
        <h3 className='text-2xl'>Price: &#8377;{product.price}</h3>

        <div className=''>
          <h2 className='text-blue-900 text-2xl p-2'>Description</h2>
          <ul>
            {descarr.map((desc, i) => (
              <li className='list-inside list-disc py-2 px-4' key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center m-4">
          <button className='text-white bg-blue-900 w-1/4 rounded-xl py-1 shadow-md  active:shadow-blue-900 transition-shadow duration-150' onClick={()=>addToCart(pId,1,product.price,product.title,product.image)}>Add to Cart</button>
        </div>
      </div>

    </div>
  );
};

export default Products;
