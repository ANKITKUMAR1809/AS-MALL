import React from 'react';
import useProductCategory from '../Hooks/useProductCategory';
import Card from './Home/Card';
import homeBanner from '../assets/homeBanner.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const categoryData = useProductCategory("men's clothing");
  const womenCategory = useProductCategory("women's clothing");
  const electronicCategory = useProductCategory("electronics");
  const jeweleryCategory = useProductCategory("jewelery");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerGroup = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const allSections = [
    { title: "Men's Special Edition", data: categoryData },
    { title: "Women's Special Edition", data: womenCategory },
    { title: "Electronics Collections", data: electronicCategory },
    { title: "Jewelry Collections", data: jeweleryCategory },
  ];

  return (
    <div className="flex flex-col gap-12 px-4 md:px-10 py-10 bg-zinc-900 text-white min-h-screen">

      {/* Banner */}
      <motion.div 
        className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={homeBanner} 
          alt="Home Banner" 
          className="h-full w-full object-cover rounded-2xl"
        />
      </motion.div>

      {/* Product Sections */}
      {allSections.map(({ title, data }, index) => (
        <motion.div 
          key={index}
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-semibold tracking-wider text-blue-400"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>

          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            variants={staggerGroup}
          >
            {data.map((product) => (
              <motion.div 
                key={product.id} 
                variants={fadeInUp}
              >
                <Card 
                  pId={product.id}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
