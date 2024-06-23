import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './features/auth/components/LoginPage';
import SignUpPage from './features/auth/components/SignUpPage';
import Checkout from './pages/Checkout';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/product-detail/:id",
      element: <ProductDetailPage />,
    },
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
      {/* <SignUpPage /> */}
    </div>
  );
}

export default App;
