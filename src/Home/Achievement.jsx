import React from 'react'
import photo1 from '../assets/photo1.svg';
import photo2 from '../assets/photo2.svg';
import photo3 from '../assets/photo3.svg';


const Achievement = () => {
    return (
        <div className='bg-[#EFF2F9] py-16'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 lg:gap-20 mx-auto'>

                    {/* Section 1 */}

                    <div className='text-center flex flex-col  items-center'>
                        <div className='my-4 '>
                            <img src={photo1} alt="Make a resume that wins interviews!" className='w-16 sm:w-20' />

                        </div>
                        <div className='text-center sm:text-left max-w-[350px] lg:max-w-[400px]'>
                            <h5 className="text-lg sm:text-base xl:text-xl font-semibold text-[#1A1C6A] whitespace-nowrap">Make a resume that wins interviews!</h5>
                            <p className="text-sm sm:text-base md:text-lg my-3 text-left leading-relaxed ">Use our resume maker with its advanced creation tools to tell professional story
                                that engages recruiters, hiring managers and even CEOs.</p>
                        </div>


                    </div>

                    {/* Section 2 */}

                    <div className='text-center flex flex-col  items-center'>
                        <div className='my-4'>
                            <img src={photo3} alt="Resume writing made easy!" className='w-16 sm:w-20' />

                        </div>
                        <div className="text-center sm:text-left max-w-[350px] md:max-w-[400px]">
                            <h5 className="text-lg sm:text-base lg:text-xl font-semibold text-[#1A1C6A] whitespace-nowrap">Resume writing made easy!</h5>
                            <p className="text-sm sm:text-base md:text-lg my-3 leading-relaxed">Resume writing has never been this effortless. Pre-generated text, visual designs, and more - all already integrated into the resume maker. Just fill in your details.</p>
                        </div>

                    </div>

                    {/* Section 3 */}

                    <div className='text-center flex flex-col items-center'>
                        <div className='my-4'>
                            <img src={photo2} alt="A recruiter-tested CV maker tool!" className='w-16 sm:w-20' />
                        </div>
                        <div className="text-center sm:text-left max-w-[350px] md:max-w-[400px]">
                            <h5 className="text-lg sm:text-base lg:text-xl font-semibold text-[#1A1C6A] whitespace-nowrap">A recruiter-tested CV maker tool!</h5>
                            <p className="text-sm sm:text-base md:text-lg my-3 leading-relaxed">Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Achievement
