import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const MoreProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   Slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  return (
    <>
       <section className='py-[92px]'>
         <div className="container">
            <h2 className='text-[34px] font-semibold text-center mt-[32px]'>More Produts</h2>
            <div className="row mt-[32px]">

                <div className="slider-container">
                    <Slider {...settings}>     
                                    {
                                        products.slice(0,15).map((item,i)=>(
                                            <SingleProduct proImg={item.images[0]} proName={item.title} proPrice={item.price}/>
                                        ))
                                    }
                    </Slider>
              </div>

            </div>
         </div>
       </section>
    </>
  )
}

export default MoreProduct