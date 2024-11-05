import React from 'react'
import guide from '../assets/guide.svg'
import { Link } from 'react-router-dom'

const Guide = () => {
    return (
        <div className='flex items-center min-h-[80vh] py-16 px-6 lg:px-20'>
            <div className='w-full max-w-6xl  mx-auto flex flex-col lg:flex-row items-center '>
                <div className=' flex-1 flex justify-center lg:justify-end'>
                    <img src={guide} alt="image" className='w-[300px] sm:w-[400px] lg:w-[600px]' />

                </div>
                <div className='flex-1 text-center lg:text-left  mt-10 lg:mt-[-2rem] px-4'>
                    <h2 className="my-6 text-3xl sm:text-4xl lg:text-[39px] leading-snug md:leading-normal text-[#1e2532] font-bold">Use the best resume maker as your guide!</h2>
                    <p className=" text-[#1e2532] text-base sm:text-lg  opacity-90 my-6 max-w-[600px] mx-auto lg:mx-0 leading-relaxed">Getting that dream job can seem like an impossible task. We're here to change that.
                        Give yourself a real advantage with the best online resume maker: created by experts, imporved
                        by data, trusted by millions of professionals.</p>
                    <Link to={'/resume'} className='uppercase mt-3 md:mt-4 btn btn-primary'>create my resume</Link>

                </div>


            </div>

        </div>
    )
}

export default Guide
