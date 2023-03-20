import Link from 'next/link'
import React from 'react'
import {
  FacebookIconFooter,
  InstagramIconFooter,
  TwitterIconFooter,
} from './Icon'

function Footer() {
  return (
    <div className='flex flex-col gap-[20px] lg:flex-row lg:justify-between '>
      <div className='flex flex-col gap-[54px] mb-[20px] lg:mb-0'>
        <div>
          <img src='../images/Krconex_Footer.png' alt='Footer Logo' />
        </div>
        <div className='flex gap-[30.65px] items-center'>
          <FacebookIconFooter />
          <InstagramIconFooter />
          <TwitterIconFooter />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='font-ubuntu font-bold text-[#C4C4C4] text-[25px]'>
          <Link href={'/'}>Help</Link>
        </h2>
        <div className='flex flex-col gap-[15px]'>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Privacy Policy</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Shipping & Delivery</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Refund Policy</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Track Your Order</Link>
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='font-ubuntu font-bold text-[#C4C4C4] text-[25px]'>
          <Link href={'/'}>Store</Link>
        </h2>
        <div className='flex flex-col gap-[15px]'>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Men Fashion</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Women Fashion</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Store Sale</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Collections</Link>
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='font-ubuntu font-bold text-[#C4C4C4] text-[25px]'>
          <Link href={'/'}> Support</Link>
        </h2>
        <div className='flex flex-col gap-[15px]'>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Feedback</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Contact us</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Customer Services</Link>
          </p>
          <p className='font-ubuntu font-normal text-[#C4C4C4] text-base lg:text-[20px]'>
            <Link href={'/'}> Terms and condition</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
