import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='relative flex flex-col w-full md:flex-row mb-[5px]'>
      <div className='relative lg:w-1/2 '>
        <img
          className='lg:h-[693px] object-cover'
          src='../images/hero_lady.png'
          alt='Hero-lady'
        />
        <div className='absolute bg-white px-[5px] py-[9px] top-[50%] left-[70%] lg:px-[10px] lg:py-[18px]'>
          <Link
            className='font-ubuntu font-bold  text-base leading-[23px] text-primaryFashion lg:text-[20px]'
            href={'/'}
          >
            Shop for her
          </Link>
        </div>
      </div>
      <div className='relative lg:w-1/2 lg:h-[693px]'>
        <img
          className='lg:h-[693px] object-cover'
          src='../images/hero_guy.png'
          alt='Hero-lady'
        />
        <div className='absolute bg-primaryFashion px-[5px] py-[9px] top-[50%] left-[70%] lg:px-[10px] lg:py-[18px]'>
          <Link
            className='font-ubuntu font-bold  text-base leading-[23px] text-white lg:text-[20px]'
            href={'/'}
          >
            Shop for him
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
