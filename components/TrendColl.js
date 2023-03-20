import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowSliderLeft, ArrowSliderRight } from './Icon'
import { trendImg } from '@/data'
import Link from 'next/link'

function TrendColl() {
  const [slide, setSlide] = useState(null)

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    // autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <div className='relative mb-[63px]'>
        <Slider ref={setSlide} {...settings}>
          {trendImg.map((trend) => {
            return (
              <div
                className='relative flex flex-col gap-[52px] lg:flex-row'
                key={trend.id}
              >
                <div>
                  <img
                    className='relative w-[401px] h-[373px] object-cover'
                    src={trend.img}
                    alt=''
                  />
                </div>
                <div className='absolute top-[5%] left-[40%] '>
                  <p className='font-ubuntu font-semibold text-[20px] leading-[40px] lg:font-bold'>
                    {trend.content}
                  </p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className='flex items-center justify-center gap-[10px] mb-[36.71px]'>
        <button className='cursor-pointer' onClick={slide?.slickPrev}>
          <ArrowSliderLeft />
        </button>
        <button className='cursor-pointer' onClick={slide?.slickNext}>
          <ArrowSliderRight />
        </button>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          className='font-ubuntu font-semibold text-base leading-[23px] bg-yellowPrimary px-[5px] py-4 lg:font-bold lg:text-[20px]'
          href={'/'}
        >
          CHECK COLLECTIONS
        </Link>
      </div>
    </div>
  )
}

export default TrendColl
