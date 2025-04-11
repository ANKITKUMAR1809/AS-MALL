import React, { useEffect, useState } from 'react'
import useAllProduct from '../Hooks/useAllProduct'
import { useParams } from 'react-router'
import useCartContext from '../Contexts/Cart'
import { motion } from 'framer-motion'

export const Products = () => {
  const { addToCart } = useCartContext()
  const { pId } = useParams()
  const { allProducts, error } = useAllProduct()
  const [product, setProduct] = useState(null)
  const [descarr, setDescarr] = useState([])

  useEffect(() => {
    if (allProducts.length > 0) {
      const foundProduct = allProducts.find((e) => e.id === Number(pId))
      if (foundProduct) {
        setDescarr(foundProduct.description.split(', '))
        setProduct(foundProduct)
      }
    }
  }, [allProducts, pId])

  if (error) {
    return <div className="text-red-400 text-center mt-4">Error: {error.message}</div>
  }

  if (!product) {
    return <div className="text-center text-gray-400 mt-10">Loading product details...</div>
  }

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-10 justify-center items-start py-10 px-4 md:px-16 bg-zinc-900 text-white min-h-screen transition-colors"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Product Image */}
      <motion.div
        className="w-full max-w-sm mx-auto lg:mx-0 bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-[400px] p-6"
        />
      </motion.div>

      {/* Product Info */}
      <div className="flex-1 space-y-6">
        <motion.h1 className="text-2xl font-bold text-white">
          {product.title}
        </motion.h1>

        <h2 className="uppercase text-sm text-zinc-400 tracking-wide">
          {product.category}
        </h2>

        <h3 className="text-xl font-semibold text-blue-400">
          ₹{product.price}
        </h3>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            Description
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            {descarr.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={() =>
            addToCart(Number(pId), 1, product.price, product.title, product.image)
          }
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="w-full md:w-1/2 lg:w-1/3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl shadow-lg transition-all"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Products
