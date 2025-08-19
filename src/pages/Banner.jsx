import React, { useEffect, useState } from 'react'
import CommonHead from '../components/common/CommonHead'
import { Link } from 'react-router'
import SingleProduct from '../components/common/SingleProduct'
import axios from 'axios'
import Pagination from '../components/Pagination'

const Banner = () => {
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

 const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);


  return (
    <>
       <section className='py-[20px]'>
           
          <div className="container">
            <div className="row flex gap-[70px]">
                <div className='w-[300px]'>
                    <h2 className='text-3xl font-semibold'>Filters</h2>
                    <div>
                        <ul className='flex flex-col gap-[10px] mt-[30px]'>
                            {
                                navItems.map((item,i)=>(

                                    <li key={i}><Link className='FilterItems text-[22px] text-[#6b6565] font-normal' to={'#'}>{item.Name}</Link></li>
                                ))
                            }
                       </ul>
                    </div>
                </div>

                <div>
                        <div className='flex gap-[35px] flex-wrap'>
                            {
                                currentItems.map((item,i)=>(
                                    <SingleProduct key={i} proImg={item.image} proName={item.title} proPrice={item.price}/>
                                ))
                            }
                        </div>
                </div>

            </div>
          </div>
       </section>
       <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
    </>
  )
}

export default Banner