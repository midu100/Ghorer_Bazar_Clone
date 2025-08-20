import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Cart = ({closeCart}) => {
     const [products, setProducts] = useState([]);
     const localProduct = JSON.parse(localStorage.getItem('Name'))

      useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCart = products.filter((item)=>{
      return localProduct.includes(item.id)
  })

  const totalPrice = addCart.reduce((initial,item)=>{
    return initial + item.price
  },0)

  return (
    <div>
        <section >
            <diV onClick={closeCart} className='w-full h-screen bg-[#00000072] fixed top-0 left-0 z-10'></diV>
              <div className='w-[400px] h-screen bg-white ml-auto p-3 fixed top-0 right-0 z-30 duration-400'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-medium'>Shopping Cart</h2>
                    <RxCross2 onClick={closeCart} className='text-2xl font-semibold cursor-pointer'/>
                </div>

                <div className='mt-[30px] h-[640px] overflow-y-scroll'>
                    {
                        addCart.map((item,i)=>(
                            <div key={i} className='flex justify-between items-center mt-[10px]'>
                                <div className="flex gap-[10px] items-center">
                                    <div className="Img w-[50px] overflow-hidden">
                                    <img src={item.image} alt='img' />
                                    </div>
                                    <p className='text-[18px] font-medium truncate w-[200px]'>{item.title}</p>
                                </div>

                                <p className='text-[18px] font-medium'>{item.price}</p>
                            </div>
                        ))
                    }



                </div>

                <div className='flex justify-between items-center '>
               <p className='text-[20px] font-poppins font-medium text-second'>Total</p>
               <p className='text-[20px] font-poppins font-medium text-second'>{totalPrice}$</p>
            </div>


             </div>
        </section>
    </div>
  )
}

export default Cart