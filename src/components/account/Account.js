import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import UpdateAccountInfo from './UpdateInfo'; // Import the UpdateAccountInfo component

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // true for login, false for sign up
  const [currentUser, setCurrentUser] = useState(null); // Stores the logged-in or signed-up user
  const [errorMessage, setErrorMessage] = useState('');
  const [cartDetails, setCartDetails] = useState([]); // Placeholder for user cart details
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const openModal = (isLogin) => {
    setIsLoginForm(isLogin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  
    // If it's a signup, include the username
    if (!isLoginForm) {
      payload.username = e.target.username?.value;
    }
  
    try {
      let response;
      if (isLoginForm) {
        response = await axios.post('http://localhost:5000/api/auth/login', payload);
      } else {
        response = await axios.post('http://localhost:5000/api/auth/signup', payload);
      }
  
      setCurrentUser({
        username: response.data.username || payload.username,
        email: payload.email,
      });
  
      setCartDetails([{ item: 'Spices', quantity: 2 }, { item: 'Dry Fruits', quantity: 1 }]);
      closeModal();
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Something went wrong');
    }
  };
  

  const handleLogout = () => {
    setCurrentUser(null);
    setCartDetails([]);
  };

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:5000/api/auth/update', {
        username: newUsername,
        password: newPassword,
      });

      if (response.status === 200) {
        setCurrentUser({
          ...currentUser,
          username: newUsername, // Update the username
        });
        setIsUpdateFormOpen(false);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Update failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-yellow-100 to-yellow-300">
      {/* Logged-in View */}
      {currentUser ? (
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold text-center text-amber-800">
            Welcome, {currentUser.username || currentUser.email}!
          </h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Your Cart:</h3>
            {cartDetails.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {cartDetails.map((item, index) => (
                  <li key={index} className="p-2 bg-gray-100 rounded-md">
                    {item.item} - {item.quantity}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="flex gap-4 mt-6">
            <button
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={() => alert('Account settings coming soon!')}
            >
              Account Settings
            </button>
            <button
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="px-4 py-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700"
              onClick={() => setIsUpdateFormOpen(true)} // Open the update form
            >
              Update Account Info
            </button>
          </div>
        </motion.div>
      ) : (
        // Logged-out View: Login/Signup Options
        <>
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
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                  <AiOutlineClose
                    onClick={closeModal}
                    className="absolute text-2xl cursor-pointer top-3 right-3"
                  />
                  <h2 className="mb-4 text-2xl font-semibold text-center text-amber-800">
                    {isLoginForm ? 'Login' : 'Sign Up'}
                  </h2>
                  <form onSubmit={handleFormSubmit}>
                    {!isLoginForm && (
                      <div className="relative">
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                        />
                      </div>
                    )}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
                    <div className="flex gap-4 mt-6">
                      <button
                        type="submit"
                        className="w-full py-3 text-white rounded-lg bg-amber-600 hover:bg-amber-700"
                      >
                        {isLoginForm ? 'Login' : 'Sign Up'}
                      </button>
                      <button
                        type="button"
                        className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Update Account Info Form */}
      {isUpdateFormOpen && (
        <UpdateAccountInfo
          errorMessage={errorMessage}
          newUsername={newUsername}
          setNewUsername={setNewUsername}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          handleUpdateFormSubmit={handleUpdateFormSubmit}
        />
      )}
    </div>
  );
};

export default Account;
