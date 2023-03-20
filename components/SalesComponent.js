import Link from 'next/link'
import React from 'react'

function SalesComponent() {
  return (
    <div className='relative'>
      <div className='relative  z-[1] bg-yellowPrimary  h-[350px] lg:ml-[289px] lg:h-[250px]'></div>
      <div className='absolute w-full top-0 left-0 z-[2] flex flex-row gap-[25px] justify-between lg:pl-[22px] '>
        <div className='flex flex-col px-8 w-full lg:w-[70%]'>
          <p className='font-ubuntu font-bold text-[40px]  w-full lg:ml-[290px]  text-white lg:text-[60px]'>
            Up To <span className='text-primaryFashion'> 60% </span> Off On All
          </p>
          <p className='font-ubuntu font-bold w-full text-[120px] lg:text-[400px] lg:-tracking-[2rem] uppercase md:text-[150px] lg:-mt-[170px]'>
            Sale
          </p>
          <div>
            <Link
              className='font-ubuntu font-bold text-[20px] leading-[23px] text-center text-yellowPrimary bg-primaryFashion px-[10px] py-[16px] lg:hidden'
              href={'/'}
            >
              CHECK CLERANCE
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex flex-col gap-8 w-[30%] lg:-mt-[150px]'>
          <div>
            <img
              className='object-cover'
              src='../images/sale_img.png'
              alt='Sale Influencer'
            />
          </div>
          <div>
            <Link
              className='font-ubuntu font-bold text-[20px] leading-[23px] text-center text-primaryFashion bg-yellowPrimary px-[10px] py-[16px]'
              href={'/'}
            >
              CHECK CLERANCE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesComponent
