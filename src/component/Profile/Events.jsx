import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className=' min-[424px]:w-[70vw] mx-auto p-4  mt-5 px-5 flex flex-wrap items-center flex-col gap-5'>
   

   {[1].map((item)=><EventCard key={item}/>)}

    </div>
  )
}

export default Events