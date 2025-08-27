import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaTicketAlt, FaMoneyBillWave } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router";

const CheckoutPage = ({closeCheck}) => {
  const navigate = useNavigate()
   const [showCart,setShowCart]=useState(true)

   const [products, setProducts] = useState([]);
  const localProduct = JSON.parse(localStorage.getItem('Name'))
  const [deliveryCharge, setDeliveryCharge] = useState(70)

  console.log(deliveryCharge)


  useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          const addCartPro =res.data.filter((item)=>{
            return localProduct.includes(item.id)
          })

          setProducts(addCartPro);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const totalPrice = products.reduce((initial,total)=>{
      return initial + total.price
    },0)
    console.log(totalPrice)

  return (
    <> 
         {
          showCart?

        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div onClick={()=>setShowCart(!showCart)} className="black w-full h-screen bg-[#0000006f] fixed top-0 left-0 z-8"></div>
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 absolute top-[100px] z-20">
            
            {/* Title */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[15px] font-bold  text-gray-800 ">
              ক্যাশ অন ডেলিভারিতে অর্ডার করতে আপনার তথ্য দিন
            </h2>
            <RxCross2 onClick={()=>setShowCart(!showCart)} className="text-[22px] cursor-pointer"/>

            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaUser className="text-gray-500 mr-3" />
                <input type="text" placeholder="আপনার নাম" className="w-full outline-none" />
              </div>

              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaPhoneAlt className="text-gray-500 mr-3" />
                <input type="text" placeholder="ফোন নাম্বার" className="w-full outline-none" />
              </div>

              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaMapMarkerAlt className="text-gray-500 mr-3" />
                <input type="text" placeholder="এড্রেস" className="w-full outline-none" />
              </div>
            </div>

            {/* Shipping Method */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-3">শিপিং মেথড</h3>
              <div className="space-y-2">
                <label className="flex items-center border rounded-lg px-3 py-2 cursor-pointer">
                  <input onChange={(e)=>setDeliveryCharge(Number(e.target.value))} type="radio" name="shipping" value={'70'} className="mr-3" defaultChecked />
                  ঢাকা সিটির ভিতরে — <span className="ml-auto font-semibold">Tk 70</span>
                </label>
                <label className="flex items-center border rounded-lg px-3 py-2 cursor-pointer">
                  <input onChange={(e)=>setDeliveryCharge(Number(e.target.value))} type="radio" name="shipping" value={'60'} className="mr-3" />
                  চট্টগ্রাম সিটির ভিতরে — <span className="ml-auto font-semibold">Tk 60</span>
                </label>
                <label className="flex items-center border rounded-lg px-3 py-2 cursor-pointer">
                  <input onChange={(e)=>setDeliveryCharge(Number(e.target.value))} type="radio" name="shipping" value={'130'} className="mr-3" />
                  ঢাকা এবং চট্টগ্রাম সিটির বাইরে — <span className="ml-auto font-semibold">Tk 130</span>
                </label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mt-6 flex items-center border rounded-lg px-3 py-2">
              <FaTicketAlt className="text-gray-500 mr-3" />
              <input type="text" placeholder="কুপন কোড" className="w-full outline-none" />
              <button className="ml-3 bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600">
                এপ্লাই
              </button>
            </div>

            {/* Product Summary */}
            <div className="mt-6 space-y-2 border-t pt-4">
              <div>
                {
                  products.map((item,i)=>(
                    <div className="flex justify-between">
                      <span className="truncate w-[300px]">{item.title}</span>
                      <span className="font-semibold">{`Tk ${Math.floor(item.price)}`}</span>
                    </div>
                  ))
                }
              </div>
              <div className="flex justify-between text-gray-600">
                <span>সাব টোটাল</span>
                <span>Tk {Math.floor(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>ডেলিভারি চার্জ</span>
                <span>{deliveryCharge}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>সর্বমোট</span>
                <span>{`Tk ${Math.floor(totalPrice + deliveryCharge)}`}</span>
              </div>
            </div>

            {/* Order Note */}
            <div className="mt-4">
              <textarea
                placeholder="Order note"
                className="w-full border rounded-lg p-3 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                আপনার অর্ডার কনফার্ম করতে ক্লিক করুন
              </button>
              <button className="w-full flex items-center justify-center bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                <FaMoneyBillWave className="mr-2" /> Pay Online
              </button>
            </div>
          </div>
        </div>
        :
        navigate('/')
         }
    </>
  );
};

export default CheckoutPage;
