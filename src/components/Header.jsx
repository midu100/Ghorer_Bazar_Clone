import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div>
        <header className='bg-[#FC8934] py-[10px]'>
            <div className="container">
                <div className="row flex justify-center">
                    <div className='flex gap-[5px]'>
                        <p className='text-[18px] text-[#fff]'>আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:</p>
                        <p className='flex items-center gap-[5px] text-[18px] text-[#fff]'><FaPhoneAlt /> +8801767982982</p>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header