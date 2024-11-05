import React from 'react'
import cv from '../assets/cv.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-20 flex items-center shadow-[0_4px_10px_rgba(0,0,0,0.1)]'>
            <div className='w-full p-4 md:p-0 md:px-16 lg:px-32 xl:px-52'>
                <div className='flex items-center justify-between'>
                    <Link to={'/'} href="" className='flex items-center justify-start text-lg font-bold md:text-xl'>
                        <img src={cv} alt="" className='w-6 md:w-7 opacity-80 mr-2' />
                        <span className='text-[#1e2532] font-semibold'>build <span className='text-[#1A91F0]'>resume.</span></span>
                    </Link>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
