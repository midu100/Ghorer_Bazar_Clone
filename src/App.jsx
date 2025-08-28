import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import CheckoutPage from './pages/CheckoutPage'
import SignUpPage from './pages/SignUpPage'
import app from './Firebase.config'
import { ToastContainer } from 'react-toastify'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />} >
        <Route index element={<Home />} />
        <Route path='/productdetails/:alu' element={<ProductDetails />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Route>

      <Route path='/registration' element={<SignUpPage />} />
    </Route>
  ))

  return (
    <>
     <RouterProvider router={myRoute} />
     <ToastContainer />
      
    </>
  )
}

export default App
