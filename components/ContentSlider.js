import React from 'react'

function ContentSlider() {
  return (
    <div className='flex gap-[6px]'>
      <div className='bg-black  h-[309px] text-white'>
        <h2>What’s going on!</h2>
        <p>Learn more about upcoming fashion trends and tips</p>
      </div>
      <div className='bg-yellowPrimary bg-cover flex h-[309px] pl-[55px] pr-[71px]'>
        <div className=''>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            accusamus magni culpa! Laboriosam, eaque sequi non quidem ad
            similique vitae!
          </p>
        </div>
        <div>
          <img src='../images/fashion_img.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default ContentSlider
