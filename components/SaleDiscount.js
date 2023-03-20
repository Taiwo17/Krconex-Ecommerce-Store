import React from 'react'
import { BoxIcon, PadIcon, TruckIcon } from './Icon'

function SaleDiscount() {
  return (
    <div className='bg-primaryFashion px-8 py-10 mb-[84px] lg:pl-[71px] lg:py-[34px]'>
      <div className='flex flex-col gap-4 justify-between md:gap-8 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:pr-[146px]'>
        <div className='mb-5 md:mb-0'>
          <p className='font-ubuntu text-[25px] font-semibold leading-[34px] text-white lg:text-[30px]'>
            Up To <span className='text-yellowPrimary'>40%</span> Off
          </p>
          <p className='font-ubuntu text-[50px] font-bold leading-[40px] text-yellowPrimary lg:[80px]'>
            SALE!
          </p>
        </div>
        <div className='flex items-center gap-[10px]'>
          <TruckIcon />
          <p className='font-ubuntu font-bold text-[20px] leading-[29px] text-[#C4C4C4] lg:w-[134px]'>
            Free & Fast Shipping
          </p>
        </div>
        <div className='flex items-center gap-[10px]'>
          <BoxIcon />
          <p className='font-ubuntu font-bold text-[20px] leading-[29px] text-[#C4C4C4] lg:w-[142px]'>
            30-days Free Return
          </p>
        </div>
        <div className='flex items-center gap-[10px]'>
          <PadIcon />
          <p className='font-ubuntu font-bold text-[20px] leading-[29px] text-[#C4C4C4] lg:w-[153px]'>
            100% Secure Shopping
          </p>
        </div>
      </div>
    </div>
  )
}

export default SaleDiscount
