import React from 'react'
import Banner from './Banner'
import CommonHead from '../components/common/CommonHead'
import MoreProduct from '../components/common/MoreProduct'

const Home = () => {
  return (
    <div>
         <CommonHead Title={"ALL PRODUCTS"} />
        <Banner />
        <MoreProduct />
    </div>
  )
}

export default Home