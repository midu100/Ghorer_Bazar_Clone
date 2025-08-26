import React from 'react'
import Banner from './Banner'
import CommonHead from '../components/common/CommonHead'
import MoreProduct from '../components/common/MoreProduct'
import ProductDetails from './ProductDetails'
import AllProduct from './AllProduct'

const Home = () => {
  return (
    <div>
         
        <Banner />
        <AllProduct />
        <MoreProduct />
    </div>
  )
}

export default Home