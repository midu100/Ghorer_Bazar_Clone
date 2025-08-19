import React from 'react'

const CommonHead = ({Title}) => {
  return (
    <>
        <section className='bg-[#FC8934] py-[30px]'>
            <div className="container">
                <div className="row">
                    <h1 className='text-[42px] font-bold text-[#fff] text-center'>{Title}</h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default CommonHead