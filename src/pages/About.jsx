import React, { useEffect } from 'react'
import logo from '../assets/img/LogoGhor.png'
import { Link } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const About = () => {
    const items =[
        {
            Name : "About Us",
            path : "#"
        },
        {
            Name : "রিটার্ন পলিসি",
            path : "#"
        },
        {
            Name : "রিফান্ড পলিসি",
            path : "#"
        }
    ]

    const help =[
        {
            Name : "গ্রাহক সেবা",
            path : "#"
        },
        {
            Name : "Contact",
            path : "#"
        },
    ]

    // AOS

    useEffect(() => {
       AOS.init({ duration: 1000 })   // init call
    }, [])
    

  return (
    <>
      <section className='mb-[60px] mt-[150px]'>
        <div className="container">
            <div className="row flex justify-between font-medium">
                <div className='w-[550px]'>
                    <div className="IMG w-[100px]">
                        <img src={logo}/>
                    </div>

                    <h2 data-aos="fade-down" data-aos-duration="1500" className='text-[19px] font-bold my-[20px]'>Ghorer Bazar: Your Trusted Source for Safe & Organic Food </h2>
                    <p data-aos="fade-down" data-aos-duration="2000" className='text-[18px] font-normal'>Ghorer Bazar is a leading e-commerce platform committed to delivering safe, healthy, and organic food products across Bangladesh. Renowned for its dedication to quality, Ghorer Bazar offers a diverse range of health-focused items, including premium mustard oil, pure ghee, organic honey, dates, chia seeds, and an assortment of nuts. Each product is carefully sourced and crafted to ensure maximum health benefits, meeting the highest standards of purity and freshness.
                        <br></br>
                        <br></br>
                        With a focus on convenience, Ghorer Bazar operates primarily online, bringing the goodness of nature straight to your doorstep. Whether you're seeking to elevate your wellness journey or simply enjoy natural, wholesome foods, Ghorer Bazar is your go-to destination for authentic, trustworthy products.
                    </p>
                </div>

                <div>
                    <h2 className='text-[22px] text-[#FC8934]'>COMPANY</h2>
                    <div className='flex flex-col gap-[15px] mt-[22px]'>
                        {
                            items.map((item,i)=>(
                                <Link data-aos="fade-up" data-aos-duration="2500" key={i} className='Footer text-[20px] font-medium hover:text-[#FC8934] duration-400 cursor-pointer' to={item.path}>{item.Name}</Link>
                            ))
                        }
                    </div>
                    
                </div>

                <div>
                    <h2 className='text-[22px] text-[#FC8934]'>QUICK HELP</h2>
                    <div className='flex flex-col gap-[15px] mt-[22px]'>
                        {
                            help.map((item,i)=>(
                                <Link data-aos="fade-up" data-aos-duration="2500" key={i} className='text-[20px] font-medium' to={item.path}>{item.Name}</Link>
                            ))
                        }
                    </div>
                    
                </div>

                <div>
                    <h2 data-aos="fade-up" data-aos-duration="2500" className='text-[22px] text-[#000]'>DBID ID : 437361334</h2>
                </div>


            </div>
        </div>
      </section>
    </>
  )
}

export default About