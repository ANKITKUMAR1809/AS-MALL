import React from 'react'
import useProductCategory from '../Hooks/useProductCategory'
import Card from './Home/Card'
import homeBanner from '../assets/homeBanner.jpg'
import { motion } from 'framer-motion'

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const Home = () => {
  const categoryData = useProductCategory("men's clothing")
  const womenCategory = useProductCategory("women's clothing")
  const electronicCategory = useProductCategory("electronics")
  const jeweleryCategory = useProductCategory("jewelery")

  return (
    <div className="flex flex-col px-4 md:px-8 py-8 bg-zinc-900 text-white min-h-screen">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="banner w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-8"
      >
        <img src={homeBanner} className="w-full h-full object-cover" alt="Home Banner" />
      </motion.div>

      {/* Men's Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Men's Special Edition</h2>
        <div className="flex flex-wrap justify-evenly gap-6">
          {categoryData.map((product) => (
            <Card
              key={product.id}
              pId={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>

      {/* Women's Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={sectionVariant}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Women's Special Edition</h2>
        <div className="flex flex-wrap justify-evenly gap-6">
          {womenCategory.map((product) => (
            <Card
              key={product.id}
              pId={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>

      {/* Electronics Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={sectionVariant}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Electronics Collections</h2>
        <div className="flex flex-wrap justify-evenly gap-6">
          {electronicCategory.map((product) => (
            <Card
              key={product.id}
              pId={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>

      {/* Jewelery Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        variants={sectionVariant}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Jewelery Collections</h2>
        <div className="flex flex-wrap justify-evenly gap-6">
          {jeweleryCategory.map((product) => (
            <Card
              key={product.id}
              pId={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Home
