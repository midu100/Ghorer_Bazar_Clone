import React from 'react'
import Ghee from '../../assets/img/ghee.png'

const SingleProduct = ({proImg,proName,proPrice}) => {
  return (
    <>
        <div className='border border-[#aba9a9] p-[10px] rounded-[8px] w-[270px]'>
            <div className="proImg w-[250px] h-[250px] rounded-[8px] overflow-hidden">
                <img src={proImg} alt='Product'/>
            </div>
            
            <h2 className='text-[20px] font-semibold text-center mt-[15px] truncate w-[250px]'>{proName}</h2>
            <p className='text-[20px] font-semibold text-center mt-[15px]'>Tk {proPrice}</p>

            <div className='flex justify-center mt-[20px]'>
                <button className='border border-[#FC8934] py-[15px] px-[40px] rounded-[8px] text-[20px] font-semibold cursor-pointer hover:bg-[#FC8934] hover:text-[#fff] duration-400'>Quick Add</button>
            </div>
        </div>
    </>
  )
}

export default SingleProduct