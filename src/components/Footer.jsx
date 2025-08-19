import React from 'react'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section className='bg-[#FC8934] py-[50px]'>
        <div className="container">
            <div className="row flex justify-between">
                <div className='flex gap-[20px]'>
                    <Link className='text-[30px] hover:text-[#fff] duration-400' to={'#'}><FaFacebookF /></Link>
                    <Link className='text-[30px] hover:text-[#fff] duration-400' to={'#'}><FaInstagram /></Link>
                    <Link className='text-[30px] hover:text-[#fff] duration-400' to={'#'}><FaWhatsapp /></Link>
                    <Link className='text-[30px] hover:text-[#fff] duration-400' to={'#'}><IoLogoTiktok /></Link>
                </div>

                <div>
                    <p className='text-[22px] text-[#fff]'>© ঘরের বাজার 2024</p>
                </div>

                <div>
                    <p className='text-[22px] text-[#fff]'>Your Trusted Source Food </p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer