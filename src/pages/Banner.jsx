import React from 'react'
import bannerImg from '../assets/img/bannerImg.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import bannerImg2 from '../assets/img/bannerImg2.png'
import bannerImg3 from '../assets/img/bannerImg3.png'

const Banner = () => {
    // raect slick
      const settings = {
        fade : true ,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
       <section className='mb-[90px]'>

           <div className="slider-container">
                <Slider {...settings}>
     
                        <div>
                            <img className='w-full' src={bannerImg} alt='bannerImg'/>
                        </div>
                    
                        <div>
                            <img className='w-full h-[741px]' src={bannerImg2} alt='bannerImg'/>
                        </div>
                    
                        <div>
                            <img className='w-full h-[741px]' src={bannerImg3} alt='bannerImg'/>
                        </div>
               </Slider>
           </div>
       </section>
    </>
  )
}

export default Banner