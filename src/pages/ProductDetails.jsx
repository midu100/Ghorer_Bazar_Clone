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
import { IoIosArrowDown } from "react-icons/io";

const ProductDetails = () => {
    const localProduct = JSON.parse(localStorage.getItem('Name'))
    const[product,setProduct]=useState([])
    const params = useParams()
    const [showArrow,setShowArrow]=useState(false)


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
                        <h1 data-aos="fade-up" data-aos-duration="2500" className='text-2xl font-medium'>{product.title}</h1>
                        <p data-aos="fade-up" data-aos-duration="2500" className='text-[22px] font-normal'>Tk {product.price}</p>
                        <div className='flex flex-col gap-[15px] mt-[25px]'>
                            <button className='BTN1 w-full h-[60px] rounded-[5px] bg-[#000] text-[#FC8934] text-[22px] font-bold cursor-pointer'>Add to Cart</button>
                            <button className='BTN2 w-full h-[60px] rounded-[5px] bg-[#FC8934] text-[#000] text-[22px] font-bold cursor-pointer flex items-center gap-[10px] justify-center'><CiShoppingCart className='text-[27px]'/>ক্যাশ অন ডেলিভারিতে অর্ডার করুন</button>
                            <button className='BTN3 w-full h-[60px] rounded-[5px] bg-[#b7e510] text-[#000] text-[22px] font-bold cursor-pointer flex items-center gap-[10px] justify-center'><FaCreditCard /> Pay Online</button>
                            <button className='BTN4 w-full h-[60px] rounded-[5px] bg-[#000] text-[#fff] text-[22px] font-bold cursor-pointer flex items-center gap-[10px] justify-center'><FaWhatsapp />WhatsApp Us</button>
                        </div>

                        <div className='mt-[20px]'>
                          <div className='flex justify-between items-center border-b'>
                            <h2 className='text-[20px] font-medium '>Description</h2>
                            <IoIosArrowDown onClick={()=>setShowArrow(!showArrow)} className='text-[22px] cursor-pointer'/>
                          </div>
                          {
                            showArrow &&
                          <div>
                            <p className='text-[18px] font-medium text-[#5c5959]'>{product.description}</p>
                          </div>
                          }

                          <div className='mt-[30px]'>
                            <h2 data-aos="fade-up" data-aos-duration="2500" className='text-[22px] font-semibold'>আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:</h2>
                            <p data-aos="fade-up" data-aos-duration="2500" className='text-[20px] font-semibold underline mt-[20px]'>+8801767982982</p>
                            <p data-aos="fade-up" data-aos-duration="2500" className='text-[20px] font-semibold underline'>+8801742477074</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductDetails