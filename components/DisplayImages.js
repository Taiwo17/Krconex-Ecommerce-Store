import Link from 'next/link'
import React from 'react'

function DisplayImages() {
  return (
    <div className='px-8 lg:px-[138px] mb-[135px]'>
      <div className='grid grid-cols-1 gap-4 lg:gap-[12px] lg:grid-cols-3'>
        <div className='relative lg:row-span-3'>
          <img
            className='relative w-full object-cover'
            src='../images/display_img/display_one.png'
            alt='Display One'
          />
          <p className='absolute top-[70%] left-[40%] py-[10px] px-4 text-base font-ubuntu font-semibold leading-[23px] text-primaryFashion bg-yellowPrimary lg:text-[20px] lg:font-bold'>
            <Link href={'/'}>ACCESSORIES</Link>
          </p>
        </div>
        <div className='relative lg:col-start-2 lg:col-end-4'>
          <img
            className='relative w-full object-cover'
            src='../images/display_img/display_two.png'
            alt='Display One'
          />
          <p className='absolute top-[70%] left-[40%] py-[10px] px-4 text-base font-ubuntu font-semibold leading-[23px] text-primaryFashion bg-yellowPrimary lg:text-[20px] lg:font-bold'>
            <Link href={'/'}>SUMMER SALE</Link>
          </p>
        </div>
        <div className='relative lg:col-start-2 lg:col-end-3'>
          <img
            className='relative w-full object-cover'
            src='../images/display_img/display_three.png'
            alt='Display One'
          />
          <p className='absolute top-[70%] left-[40%] py-[10px] px-4 text-base font-ubuntu font-semibold leading-[23px] text-primaryFashion bg-yellowPrimary lg:text-[20px] lg:font-bold'>
            <Link href={'/'}>NEW ARRIVALS</Link>
          </p>
        </div>
        <div className='relative'>
          <img
            className='relative relative w-full object-cover'
            src='../images/display_img/display_four.png'
            alt='Display One'
          />
          <p className='absolute top-[70%] left-[40%] py-[10px] px-4 text-base font-ubuntu font-semibold leading-[23px] text-primaryFashion bg-yellowPrimary lg:text-[20px] lg:font-bold'>
            <Link href={'/'}>MEN’S JEANS</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DisplayImages
