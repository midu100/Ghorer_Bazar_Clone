import React, { useEffect, useState } from 'react'
import SliderImg from '../components/common/SliderImg'
import { CiShoppingCart } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import MoreProduct from '../components/common/MoreProduct';
import axios from 'axios';
import { useParams } from 'react-router';
import BreadCrumb from '../components/common/BreadCrumb';

const ProductDetails = () => {
    const localProduct = JSON.parse(localStorage.getItem('Name'))
    const[product,setProduct]=useState([])
    const params = useParams()
    useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.alu}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product)
  return (
    <>
        <section className='py-[110px]'>
            <div className="container">
                <BreadCrumb breadLink={'/productdetails'} breadName={'Product Details'} />
                <div className="row flex justify-between">
                    <div className='w-[690px]'>
                        <SliderImg proSubImg={product.image}/>
                    </div>

                    <div className='w-[690px]'>
                        <h1 className='text-2xl font-medium'>{product.title}</h1>
                        <p className='text-[22px] font-normal'>Tk {product.price}</p>
                        <div className='flex flex-col gap-[15px] mt-[25px]'>
                            <button className='w-full h-[60px] bg-[#000] text-[#FC8934] text-[22px] font-bold cursor-pointer'>Add to Cart</button>
                            <button className='w-full h-[60px] bg-[#FC8934] text-[#000] text-[22px] font-bold cursor-pointer flex items-center gap-[10px] justify-center'><CiShoppingCart className='text-[27px]'/>ক্যাশ অন ডেলিভারিতে অর্ডার করুন</button>
                            <button className='w-full h-[60px] bg-[#b7e510] text-[#000] text-[22px] font-bold cursor-pointer flex items-center gap-[10px] justify-center'><FaCreditCard /> Pay Online</button>
                            <button className='w-full h-[60px] bg-[#000] text-[#fff] text-[22px] font-bold cursor-pointer flex items-center gap-[10px] justify-center'><FaWhatsapp />WhatsApp Us</button>
                        </div>
                    </div>
                </div>
                <MoreProduct />
            </div>
        </section>
    </>
  )
}

export default ProductDetails