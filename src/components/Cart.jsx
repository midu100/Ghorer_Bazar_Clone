import React from 'react'

const Cart = ({closeCart}) => {
  return (
    <div>
        <section >
            <diV onClick={closeCart} className='w-full h-screen bg-[#00000072] fixed top-0 left-0 z-10'></diV>
              <div className='w-[400px] h-screen bg-white ml-auto p-3 absolute top-0 right-0 z-30 duration-400'>
             </div>
        </section>
    </div>
  )
}

export default Cart