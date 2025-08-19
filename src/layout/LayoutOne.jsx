import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CommonHead from '../components/common/CommonHead'
import Footer from '../components/Footer'
import About from '../pages/About'

const LayoutOne = () => {
  return (
    <>
    <Header />
    <Navbar />
      <Outlet />
      <About />
      <Footer />
    </>
  )
}

export default LayoutOne