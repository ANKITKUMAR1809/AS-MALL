import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useCartContext from '../Contexts/Cart'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Search, Home, Shirt, Menu, X } from 'lucide-react'
import clsx from 'clsx'

// Custom SVG for Dress Icon
const DressIcon = ({ size = 20, className = "" }) => (
    <svg className={clsx("text-white", className)} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1l2 4 3 2-2 3 3 9H6l3-9-2-3 3-2 2-4z"/>
    </svg>
)

export const Header2 = () => {
    const { cartCount, countCart, cart } = useCartContext()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        countCart()
    }, [cartCount, cart])

    useEffect(() => {
        // Always enable dark mode
        document.documentElement.classList.add('dark')
    }, [])

    const navItems = [
        { to: "", label: "Home", icon: <Home size={20} /> },
        { to: "/men", label: "Men", icon: <Shirt size={20} /> },
        { to: "/women", label: "Women", icon: <DressIcon /> },
        { to: "/cart", label: "Cart", icon: <ShoppingCart size={20} />, cart: true }
    ]

    return (
        <motion.header 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full shadow-md sticky top-0 z-50 bg-zinc-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    <Link to="/">AS MALL</Link>
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Search */}
                    <div className="flex items-center gap-2 rounded-full px-4 py-1 bg-zinc-800 border border-zinc-700">
                        <Search className="text-gray-300" />
                        <input 
                            type="search" 
                            placeholder="Search products..." 
                            className="bg-transparent outline-none text-sm w-full text-white placeholder:text-gray-400"
                        />
                    </div>

                    {/* Links */}
                    <ul className="flex gap-6 items-center font-medium text-base">
                        {navItems.map(({ to, label, icon, cart: isCart }) => (
                            <NavLink key={label} to={to} className="hover:text-blue-400 transition-colors relative">
                                <li className="flex items-center gap-1">{icon}{label}</li>
                                {isCart && cartCount > 0 && (
                                    <motion.span 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{ x: '100%' }} 
                        animate={{ x: 0 }} 
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-0 right-0 w-3/4 h-full shadow-2xl z-50 p-6 flex flex-col gap-6 bg-zinc-900 text-white"
                    >
                        {navItems.map(({ to, label, icon, cart: isCart }) => (
                            <NavLink key={label} to={to} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-lg font-medium">
                                {icon} {label}
                                {isCart && cartCount > 0 && (
                                    <span className="ml-auto bg-blue-500 text-white w-5 h-5 text-xs rounded-full flex justify-center items-center">{cartCount}</span>
                                )}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
