import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import{useDispatch,useSelector} from "react-redux"

const Favorites = () => {
  const{auth}=useSelector(store=>store);
  return (
    <div className='min-[424px]:w-[70vw] mx-auto p-4 px-2'>
        <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
        <div className='flex flex-wrap gap-3 justify-center'>

            {auth.favorites.map((item)=><RestaurantCard item={item} />)}

        </div>
    </div>
  )
}

export default Favorites