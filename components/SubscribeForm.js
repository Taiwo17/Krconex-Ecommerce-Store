import React from 'react'

function SubscribeForm() {
  return (
    <div className='bg-newspaper h-[588px] bg-cover bg-no-repeat py-[140px] flex flex-col items-center justify-center mx-auto gap-[18px] px-8'>
      <div className=' '>
        <div className='flex flex-col gap-[3px] mb-[18px] '>
          <h2 className='font-ubuntu text-[30px] text-white font-bold md:text-[55px]'>
            Subscibe Newsletter
          </h2>
          <p className='font-ubuntu text-base font-bold leading-[23px] text-white opacity-50 lg:text-[20px]'>
            Subscribe to our email and get updates right in your inbox
          </p>
        </div>
        <div>
          <form className='' action=''>
            <div className=' mx-auto  w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4'>
              <form class='flex flex-row border-0 '>
                <input
                  className='h-[62px] pl-[13.87px] font-ubuntu text-xs bg-white rounded-tl-[1000px] rounded-bl-[1000px]  border-0 leading-14 w-full outline-none '
                  type='text'
                  placeholder='Enter Your Email '
                />
                <span className='flex items-center bg-white rounded-tr-[1000px] rounded-br-[1000px] border-0 font-bold text-grey-100'>
                  <button class='bg-yellowPrimary h-[62px] text-lg text-white font-bold py-3 px-6 rounded-[1000px]'>
                    <svg
                      className=''
                      width='23'
                      height='26'
                      viewBox='0 0 23 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M10.0232 15.4322L14.1862 23.1799C14.3683 23.5194 14.6529 23.5155 14.7679 23.4972C14.8829 23.4789 15.1595 23.398 15.2597 23.0127L20.4654 2.84357C20.5565 2.48707 20.3891 2.24418 20.314 2.15799C20.2412 2.0718 20.0328 1.88767 19.7312 1.98561L2.13664 7.89598C1.8031 8.00829 1.73025 8.32953 1.71431 8.46143C1.69837 8.59593 1.69382 8.92893 1.98866 9.14179L8.81997 14.0427L14.8556 7.04586C15.1868 6.66194 15.7275 6.65802 16.0634 7.03803C16.3992 7.41804 16.4015 8.03963 16.0702 8.42356L10.0232 15.4322ZM14.6791 25.4639C13.8868 25.4639 13.1605 25.0016 12.7325 24.2076L8.31909 15.9924L1.08366 10.8015C0.30388 10.2413 -0.103654 9.24364 0.0227046 8.19503C0.147924 7.14642 0.775162 6.31327 1.65625 6.01684L19.2508 0.106464C20.0602 -0.165157 20.9276 0.0920998 21.5241 0.773764C22.1206 1.46196 22.3426 2.46748 22.1012 3.39987L16.8955 23.5677C16.6348 24.5824 15.9063 25.2993 14.9944 25.4391C14.8874 25.4547 14.7838 25.4639 14.6791 25.4639Z'
                        fill='#323232'
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeForm
