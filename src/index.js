import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

import Hero from './components/hero/Hero.js';
import ProductSection from './components/product/ProductSection.js';
import Bag from './components/bag/Bag.js';
import Custom from './components/custom/Custom.js';
import About from './components/about/About.js';
import Account from './components/account/Account.js';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'',
        element: <Hero />
      },
      {
        path:'/products',
        element: <ProductSection />

      },
      {
        path:'/bag',
        element: <Bag />
      },
      {
        path:'/custom',
        element: <Custom />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path: '/account',
        element:<Account />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
