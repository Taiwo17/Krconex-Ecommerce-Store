import { navLinks } from '@/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  TwitterIcon,
  UserIcon,
} from './Icon'

function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const currentLink = router.pathname
  const activeLink =
    'font-ubuntu font-medium text-[20px] leading-[23px] text-white lg:text-primaryFashion'
  const inActiveLink =
    'font-ubuntu font-normal text-base leading-[23px] text-white lg:text-primaryFashion opacity-80'
  return (
    <>
      <div className='h-[45px] bg-primaryFashion px-[26px] py-[13px] mb-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
          <div className='flex items-center gap-[12.23px]'>
            <UserIcon />
            <p className='font-ubuntu text-sm text-textColor font-medium leading-14'>
              My account
            </p>
          </div>
        </div>
      </div>
      <div className='border border-primaryFashion opacity-90'></div>
      <div className='px-8 py-[25px]'>
        <div className='relative flex items-center justify-between'>
          <div>
            <img src='../images/Krconex.png' alt='Home Logo' />
          </div>
          <div className={`${open ? 'flex' : 'hidden'} z-40  lg:flex`}>
            <ul className='absolute bg-primaryFashion top-[3.125rem] left-0 right-0 flex flex-col  gap-4 w-full lg:flex-row lg:gap-6 lg:top-0 lg:bg-white lg:relative'>
              {navLinks.map((link) => {
                return (
                  <li
                    className={
                      currentLink === link.href ? activeLink : inActiveLink
                    }
                    key={link.name}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <form
              className='flex items-center bg-[#e5e5e5e0] border rounded-[1000px] h-[38.87px] pr-4'
              action=''
            >
              <div>
                <input
                  className='border rounded-[1000px] bg-[#e5e5e5e0] focus:outline-none h-[38.87px]  pl-3'
                  type='text'
                  placeholder='Search'
                />
              </div>
              <div className='cursor-pointer'>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.6'>
                    <circle
                      cx='8.5514'
                      cy='8.5514'
                      r='5.44178'
                      stroke='#323232'
                      strokeWidth='2'
                    />
                    <path
                      d='M8.55143 6.21924C8.24516 6.21924 7.94189 6.27956 7.65894 6.39677C7.37598 6.51397 7.11889 6.68576 6.90232 6.90232C6.68576 7.11889 6.51397 7.37598 6.39677 7.65894C6.27956 7.94189 6.21924 8.24516 6.21924 8.55143'
                      stroke='#323232'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                    <path
                      d='M15.548 15.5479L13.2158 13.2157'
                      stroke='#323232'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </g>
                </svg>
              </div>
            </form>
          </div>
          <div className='hidden lg:flex lg:gap-[18.37px] lg:relative'>
            <div className='flex lg:relative'>
              <svg
                className='relative'
                width='25'
                height='27'
                viewBox='0 0 25 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g opacity='0.5'>
                  <path
                    d='M3.78227 6.0229C11.0327 4.30493 20.0467 4.41026 22.1299 6.64923C24.2132 8.88819 24.1702 16.3747 21.735 18.429C19.3012 20.4832 8.73157 20.6785 5.38304 18.429C1.8453 16.051 3.89798 8.73588 3.78227 4.30493C3.8517 1.82545 1 1.42334 1 1.42334'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.3005 11.5334H19.0751'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.91908 23.6195C6.32742 23.6195 6.65955 23.9326 6.65955 24.3177C6.65955 24.7039 6.32742 25.0171 5.91908 25.0171C5.50937 25.0171 5.17725 24.7039 5.17725 24.3177C5.17725 23.9326 5.50937 23.6195 5.91908 23.6195Z'
                    fill='black'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.9822 23.6195C20.392 23.6195 20.7241 23.9326 20.7241 24.3177C20.7241 24.7039 20.392 25.0171 19.9822 25.0171C19.5738 25.0171 19.2417 24.7039 19.2417 24.3177C19.2417 23.9326 19.5738 23.6195 19.9822 23.6195Z'
                    fill='black'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
              </svg>
              <span className='absolute top-[-50%]  p-[7px] h-[20px] font-ubuntu text-base font-medium leading-[14px] text-primaryFashion'>
                3
              </span>
            </div>
            <div className='flex'>
              <svg
                width='25'
                height='23'
                viewBox='0 0 25 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g opacity='0.5'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.45022 11.028C0.151129 7.20003 1.66936 2.82471 5.92743 1.53005C8.16725 0.847875 10.6395 1.2501 12.5016 2.57218C14.2632 1.28666 16.8262 0.852446 19.0636 1.53005C23.3217 2.82471 24.8496 7.20003 23.5517 11.028C21.5299 17.0956 12.5016 21.7692 12.5016 21.7692C12.5016 21.7692 3.53991 17.1665 1.45022 11.028Z'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    opacity='0.4'
                    d='M17.3447 5.43079C18.6402 5.826 19.5555 6.91684 19.6656 8.1973'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
              </svg>
              <span className='absolute top-[-50%] p-[7px] h-[20px] font-ubuntu text-base font-medium leading-[14px] text-primaryFashion'>
                2
              </span>
            </div>
          </div>
          <button className='lg:hidden' onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L13 13M1 13L13 1L1 13Z'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                width='18'
                height='14'
                viewBox='0 0 18 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 13H17M1 1H17H1ZM1 7H17H1Z'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className='hidden lg:flex border mb-[7px] border-primaryFashion opacity-90'></div>
    </>
  )
}

export default Navbar
