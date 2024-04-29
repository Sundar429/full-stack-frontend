import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux"
import { getUsersOrder } from '../State/Order/Action';

const Orders = () => {
  const {auth,cart,order}=useSelector(store=>store)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
  dispatch(getUsersOrder(jwt))
  },[auth.jwt])
  return (
    <div className='min-[424px]:w-[80vw] min-[525px]:w-[80vw] mx-auto p-4 px-2 flex items-center flex-col'>
        <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
        <div className='space-y-5 w-full md:w-[45%] min-[350px]:w-[80%] min-[450px]:w-[80%] lg:w-1/2'>
            {
                order.orders.map((order)=>order.items.map((item)=><OrderCard order={order} item={item}/>))
            }

        </div>


    </div>
  )
}

export default Orders