import React from 'react'
import resume from '../assets/resume1.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <header className='flex flex-col justify-center items-center bg-[#EFF2F9] '>
            <div className='w-full min-h-screen-minus-20 px-6'>
                <div className=' max-w-[740px] mx-auto text-center'>
                    <h6 className=' uppercase text-[#1A1C6A] mt-2 text-xs sm:text-base tracking-wider font-semibold'>online resume builder</h6>
                    <h1 className=" text-xl sm:text-2xl md:text-4xl my-4 leading-normal md:leading-relaxed tracking-wider text-[#1e2532] font-bold">Only 2% of resumes make it pass the first round. Be in the top 2%</h1>
                    <p className="text-[#1e2532] text-sm sm:text-base md:text-lg leading-relaxed max-w-[720px] mx-auto">Use professional field-tested resume templates that follow that exact 'resume
                        rules' employers look for. Easy to use and done within minutes - try now for free!</p>
                    <Link to={'/resume'} className='uppercase mt-10 btn btn-primary'>create my resume</Link>
                    <img src={resume} alt="resume" className='w-[400px] sm:w-[430px] md:w-[500px] lg:w-[900px] mt-10 mx-auto rounded-t-lg' />

                </div>

            </div>


        </header>
    )
}

export default Hero
