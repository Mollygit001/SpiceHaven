import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingBag, FaStore, FaCogs, FaInfoCircle, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full p-3 transition-all duration-300 ease-in-out z-20 ${
                isScrolled ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-gray-800 to-gray-900'
            }`}
            style={{
                boxShadow: isScrolled ? '0px 10px 15px -10px rgba(0, 0, 0, 0.5)' : 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                {/* Logo */}
                <NavLink to="/">
                    <div className="text-4xl font-bold text-[#f2f542] transform transition-transform duration-300 hover:scale-105 font-bounesva">
                        Spice Shop
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <ul className="hidden space-x-10 text-xl font-semibold text-gray-200 md:flex">
                    <NavLink to="/bag" className={({ isActive }) =>
                        isActive ? 'relative text-gray-300 hover:text-amber-400' : 'relative text-gray-300 hover:text-amber-400'}>
                        <FaShoppingBag className="w-8 h-8 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 p-2 text-sm text-white transition-opacity duration-300 transform translate-x-1/2 translate-y-full bg-gray-700 rounded-md opacity-0 group-hover:opacity-100">
                            Your Bag
                        </div>
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) =>
                        isActive ? 'relative text-gray-300 hover:text-amber-400' : 'relative text-gray-300 hover:text-amber-400'}>
                        <FaStore className="w-8 h-8 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 p-2 text-sm text-white transition-opacity duration-300 transform translate-x-1/2 translate-y-full bg-gray-700 rounded-md opacity-0 group-hover:opacity-100">
                            Products
                        </div>
                    </NavLink>
                    <NavLink to="/custom" className={({ isActive }) =>
                        isActive ? 'relative text-gray-300 hover:text-amber-400' : 'relative text-gray-300 hover:text-amber-400'}>
                        <FaCogs className="w-8 h-8 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 p-2 text-sm text-white transition-opacity duration-300 transform translate-x-1/2 translate-y-full bg-gray-700 rounded-md opacity-0 group-hover:opacity-100">
                            Customize
                        </div>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? 'relative text-gray-300 hover:text-amber-400' : 'relative text-gray-300 hover:text-amber-400'}>
                        <FaInfoCircle className="w-8 h-8 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 p-2 text-sm text-white transition-opacity duration-300 transform translate-x-1/2 translate-y-full bg-gray-700 rounded-md opacity-0 group-hover:opacity-100">
                            About Us
                        </div>
                    </NavLink>
                    <NavLink to="/account" className={({ isActive }) =>
                        isActive ? 'relative text-gray-300 hover:text-amber-400' : 'relative text-gray-300 hover:text-amber-400'}>
                        <FaUserCircle className="w-8 h-8 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 p-2 text-sm text-white transition-opacity duration-300 transform translate-x-1/2 translate-y-full bg-gray-700 rounded-md opacity-0 group-hover:opacity-100">
                            Account
                        </div>
                    </NavLink>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <button
                    aria-label="Toggle menu"
                    className="text-3xl text-white md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-gray-800 to-gray-900 text-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button aria-label="Close menu" className="text-3xl text-white focus:outline-none" onClick={toggleMenu}>
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col gap-6 p-6 text-xl font-semibold">
                    <NavLink to="/bag" onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? 'bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-lg text-black hover:bg-orange-600 transition-all' : 'px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900 rounded-lg transition-all'}>
                        <FaShoppingBag className="w-6 h-6 mr-2" />
                        Your Bag
                    </NavLink>
                    <NavLink to="/products" onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? 'bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-lg text-black hover:bg-orange-600 transition-all' : 'px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900 rounded-lg transition-all'}>
                        <FaStore className="w-6 h-6 mr-2" />
                        Products
                    </NavLink>
                    <NavLink to="/custom" onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? 'bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-lg text-black hover:bg-orange-600 transition-all' : 'px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900 rounded-lg transition-all'}>
                        <FaCogs className="w-6 h-6 mr-2" />
                        Customize
                    </NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? 'bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-lg text-black hover:bg-orange-600 transition-all' : 'px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900 rounded-lg transition-all'}>
                        <FaInfoCircle className="w-6 h-6 mr-2" />
                        About Us
                    </NavLink>
                    <NavLink to="/account" onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? 'bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-lg text-black hover:bg-orange-600 transition-all' : 'px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900 rounded-lg transition-all'}>
                        <FaUserCircle className="w-6 h-6 mr-2" />
                        Account
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
