import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
            className={`fixed top-0 left-0 w-full flex items-center justify-between p-6 transition-all duration-300 ${isScrolled ? 'bg-amber-900 shadow-lg' : 'bg-transparent'
                } text-white z-10`}
        >
            <NavLink to='/'>
                <div className="text-4xl font-bold text-[#f2f542] transform hover:scale-105 transition-transform duration-200">
                    Spice Shop
                </div>
            </NavLink>
            <ul className="hidden gap-4 text-2xl font-bold md:flex">
                <NavLink 
                    to='/bag'
                    className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 text-black cursor-pointer hover:text-amber-400'
                    }
                >
                    Your Bag
                </NavLink>
                <NavLink
                    to='/products'
                    className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 text-black cursor-pointer hover:text-amber-400'
                    }
                >
                    Products
                </NavLink>
                <NavLink
                    to='/custom'
                    className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 text-black cursor-pointer hover:text-amber-400'
                    }
                >
                    Customize
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 text-black cursor-pointer hover:text-amber-400'
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to='/account'
                    className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 text-black cursor-pointer hover:text-amber-400'
                    }
                >
                    Account
                </NavLink>
            </ul>
            <div className="text-3xl text-black cursor-pointer md:hidden" onClick={toggleMenu}>
                &#9776;
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-amber-900 text-white w-64 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button className="p-4 text-3xl " onClick={toggleMenu}>
                    &times;
                </button>
                <ul className="flex flex-col gap-6 p-6 mt-10 text-xl font-semibold">
                    <NavLink to='/bag' onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 cursor-pointer hover:text-amber-400'
                    }>
                        Your Bag
                    </NavLink>
                    <NavLink to='/products' onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 cursor-pointer hover:text-amber-400'
                    }>
                        Products
                    </NavLink>
                    <NavLink to='/custom' onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-gray-500'
                            : 'px-4 py-2 cursor-pointer hover:text-gray-500'
                    }>
                        Customize
                    </NavLink>
                    <NavLink to='/about' onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 cursor-pointer hover:text-amber-400'
                    }>
                        About Us
                    </NavLink>
                    <NavLink to='/account' onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 text-black bg-orange-500 rounded-lg cursor-pointer hover:text-amber-400 hover:bg-orange-600'
                            : 'px-4 py-2 cursor-pointer hover:text-amber-400'
                    }>
                        Account
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
