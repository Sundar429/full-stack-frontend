import React from 'react'

function CarouselItem({image,title}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className=' min-[350px]:w-[3rem] min-[350px]:h-[3rem] min-[400px]:w-[4rem] min-[400px]:h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.5rem] md:h-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-[13rem] xl:w-[13rem] rounded-full object-cover ' src={image} alt="" />
        <span className=" min-[350px]:text-xs  min-[400px]:text-xs py-5 font-semibold sm:text-sm md:text-base xl:text-xl text-gray-400">{title}</span>

    </div>
  )
}

export default CarouselItem