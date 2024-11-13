import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // true for login, false for sign up
  const [focused, setFocused] = useState({ username: false, email: false, password: false });

  const openModal = (isLogin) => {
    setIsLoginForm(isLogin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, e) => {
    if (!e.target.value) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-yellow-100 to-yellow-300">
      {/* Option Cards for Login and Sign Up */}
      <div className="flex gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="w-48 p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => openModal(true)}
        >
          <FaUserCircle className="mx-auto mb-2 text-4xl text-amber-600" />
          <h2 className="text-xl font-semibold text-gray-700">Login</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="w-48 p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => openModal(false)}
        >
          <FaUserCircle className="mx-auto mb-2 text-4xl text-amber-600" />
          <h2 className="text-xl font-semibold text-gray-700">Sign Up</h2>
        </motion.div>
      </div>

      {/* Modal Popup for Login/Sign Up Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <button
                className="absolute text-2xl text-gray-500 top-3 right-3 hover:text-gray-700"
                onClick={closeModal}
              >
                <AiOutlineClose />
              </button>

              <motion.h2
                className="mb-6 text-2xl font-semibold text-center text-amber-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {isLoginForm ? 'Login' : 'Sign Up'}
              </motion.h2>

              <form className="space-y-8">
                {!isLoginForm && (
                  <div className="relative">
                    <motion.label
                      className="absolute text-gray-600 transition-all duration-300 pointer-events-none left-3"
                      animate={{
                        y: focused.username ? -24 : 0,
                        scale: focused.username ? 0.85 : 1,
                        color: focused.username ? '#f59e0b' : '#4b5563',
                      }}
                    >
                      Username
                    </motion.label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                      onFocus={() => handleFocus('username')}
                      onBlur={(e) => handleBlur('username', e)}
                      required
                    />
                  </div>
                )}
                <div className="relative">
                  <motion.label
                    className="absolute text-gray-600 transition-all duration-300 pointer-events-none left-3"
                    animate={{
                      y: focused.email ? -24 : 0,
                      scale: focused.email ? 0.85 : 1,
                      color: focused.email ? '#f59e0b' : '#4b5563',
                    }}
                  >
                    Email
                  </motion.label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                    onFocus={() => handleFocus('email')}
                    onBlur={(e) => handleBlur('email', e)}
                    required
                  />
                </div>
                <div className="relative">
                  <motion.label
                    className="absolute text-gray-600 transition-all duration-300 pointer-events-none left-3"
                    animate={{
                      y: focused.password ? -24 : 0,
                      scale: focused.password ? 0.85 : 1,
                      color: focused.password ? '#f59e0b' : '#4b5563',
                    }}
                  >
                    Password
                  </motion.label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                    onFocus={() => handleFocus('password')}
                    onBlur={(e) => handleBlur('password', e)}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-2 mt-4 text-white rounded-lg bg-amber-600 hover:bg-amber-700"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoginForm ? 'Login' : 'Sign Up'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Account;
