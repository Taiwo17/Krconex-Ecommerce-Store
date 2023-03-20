import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { imgSlider } from '@/data'
import { ArrowSliderLeft, ArrowSliderRight } from './Icon'

function SliderImg() {
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
    <div className='flex flex-col gap-[25px] mb-[153.6px]'>
      <Slider ref={setSlide} {...settings}>
        {imgSlider.map((slider) => {
          const { id, img, gender, starIcon, title, price, discountedPrice } =
            slider
          return (
            <div
              className='flex flex-col gap-[13px] lg:flex-row lg:gap-[20px]'
              key={id}
            >
              <div className='mb-[29px]'>
                <img className='object-cover' src={img} alt={title} />
              </div>
              <div className='flex items-center gap-[13px] mb-[13px]'>
                <h3 className='font-ubuntu font-normal text-[20px] leading-[23px] text-primaryFashion opacity-50 '>
                  {gender}
                </h3>
                <div className='flex'>
                  <img src={starIcon} alt='' />
                  <img src={starIcon} alt='' />
                  <img src={starIcon} alt='' />
                  <img src={starIcon} alt='' />
                  <img src={starIcon} alt='' />
                </div>
              </div>
              <div className='mb-[13px]'>
                <h3 className='font-ubuntu font-medium text-[24px] leading-[28px] text-primaryFashion'>
                  {title}
                </h3>
              </div>
              <div className='flex items-center gap-[17px]'>
                <p className='font-ubuntu font-bold text-[30px] leading-[34px] text-[#74CA4D]'>
                  ${discountedPrice}
                </p>
                <p className='font-ubuntu font-normal text-[24px] leading-[28px] text-primaryFashion opacity-30 line-through'>
                  ${price}
                </p>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className='flex items-center justify-center gap-[10px]'>
        <button className='cursor-pointer' onClick={slide?.slickPrev}>
          <ArrowSliderLeft />
        </button>
        <button className='cursor-pointer' onClick={slide?.slickNext}>
          <ArrowSliderRight />
        </button>
      </div>
    </div>
  )
}

export default SliderImg
