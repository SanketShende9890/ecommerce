import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './features/auth/components/LoginPage';
import SignUpPage from './features/auth/components/SignUpPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
      {/* <SignUpPage /> */}
    </div>
  );
}

export default App;
