import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import LogoGhor from '../assets/img/LogoGhor.png'
import { Link } from 'react-router'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from './Cart';

const Navbar = () => {
    const[showCart,setShowCart]=useState(false)
    const navItems = [
    {
        Name : "OFFER ZONE",
        path : "#"
    },
    {
        Name : "Best Seller",
        path : "#"
    },
    {
        Name : "Mustard Oil",
        path : "#"
    },
    {
        Name : "Ghee",
        path : "#"
    },
    {
        Name : "Dates(খেজুর)",
        path : "#"
    },
    {
        Name : "খেজুর গুড়",
        path : "#"
    },
    {
        Name : "Honey",
        path : "#"
    },
    {
        Name : "Masala",
        path : "#"
    },
    {
        Name : "Nuts & Seeds",
        path : "#"
    },
    {
        Name : "Tea/Coffee",
        path : "#"
    },
    {
        Name : "Honeycomb",
        path : "#"
    },
    {
        Name : "Organic Zone",
        path : "#"
    }
]
  return (
    <>
      

        <nav className='py-[10px]'>
            <div className="container">
                <div className="row flex justify-between items-center">
                    <div>
                        <CiSearch className='text-[25px] text-[#FC8934]'/>
                    </div>

                    <div className="Logo w-[120px]">
                        <img src={LogoGhor} />
                    </div>

                    <div className="Icons flex items-center gap-[20px]">
                        <Link className='text-[20px] text-[#FC8934]' to={'#'}><FaRegUser /></Link>
                        <button onClick={()=>setShowCart(!showCart)} className='text-[25px] text-[#FC8934]'><AiOutlineShopping /></button>
                        
                    </div>

            
                </div>
                    {/* Cart */}
                    {
                        showCart&&
                        <Cart closeCart={()=>setShowCart(!showCart)}/>
                    }
            </div>
        </nav>
                
        <section className='bg-[#F3F3F3] py-[10px]'>
            <div className="container">
                <div className="row">
                    <ul className='flex gap-[50px] flex-wrap'>
                        {
                            navItems.map((item,i)=>(

                                <li key={i}><Link className='NavItems text-[22px] font-normal' to={'#'}>{item.Name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default Navbar