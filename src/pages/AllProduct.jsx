import React, { useEffect, useState } from 'react'
import CommonHead from '../components/common/CommonHead'
import { Link, useNavigate } from 'react-router'
import SingleProduct from '../components/common/SingleProduct'
import axios from 'axios'
import Pagination from '../components/Pagination'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Slice'

const AllProduct = () => {
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

//   navigate
const navigate = useNavigate()
const handleShow = (productId)=>{
    navigate(`/productdetails/${productId.id}`)
    console.log(productId)
}

// add to cart
const dispatch = useDispatch()
const handleCart =(data)=>{
    console.log(data)
    let existId = JSON.parse(localStorage.getItem('Name')) || []
    existId.push(data)
    localStorage.setItem('Name',JSON.stringify(existId))
    dispatch(addToCart(existId))

}


  return (
    <>
       <section className='py-[20px]'>
           <CommonHead Title={"ALL PRODUCTS"} />
          <div className="container">
            <div className="row flex gap-[70px]">
                <div className='w-[300px]'>
                    <h2 className='text-3xl font-semibold'>Filters</h2>
                    <div>
                        <ul className='flex flex-col gap-[10px] mt-[30px]'>
                            {
                                navItems.map((item,i)=>(

                                    <li data-aos="fade-up" data-aos-duration="2500" key={i}><Link className='FilterItems text-[22px] text-[#6b6565] font-normal' to={'#'}>{item.Name}</Link></li>
                                ))
                            }
                       </ul>
                    </div>
                </div>

                <div>
                        <div className='flex gap-[35px] flex-wrap'>
                            {
                                currentItems.map((item,i)=>(
                                    <SingleProduct data-aos="fade-up" data-aos-duration="2500" key={i} cartClick={()=>handleCart(item.id)} showDetails={()=>handleShow(item)} proImg={item.image} proName={item.title} proPrice={item.price}/>
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

export default AllProduct