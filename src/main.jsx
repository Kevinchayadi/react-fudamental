import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/Product.jsx'
import Profile from './Pages/profile.jsx'

import DetailProductPage from './Pages/detailProduct.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "product",
    element: <ProductPage />
  },
  {
    path: "product/:id",
    element: <DetailProductPage />
  },
  {
    path: "profile",
    element: <Profile />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
