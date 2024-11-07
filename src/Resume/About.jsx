import React from 'react'

const About = ({ firstName, middleName, lastName, designation, address, email, phone, summary, handleChange, errors }) => {
    return (
        <section className='pt-8'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-6'>
                <div className='mt-12'>
                    <div className=' mb-8'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532]  uppercase tracking-wider text-sm sm:text-lg'>about section</h3>
                    </div>
                    <div className='pt-7 px-4 md:px-8 pb-0 border border-black/10 mb-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                            <div className='mb-2'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>First Name</label>
                                <input type="text"
                                    placeholder='e.g. Arun'
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all' />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                            </div>
                            <div className='mb-2'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Middle Name (optional)</label>
                                <input type="text"
                                    name='middleName'
                                    value={middleName}
                                    onChange={handleChange}
                                    placeholder='e.g. Singh'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />

                            </div>
                            <div className='mb-2'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Last Name</label>
                                <input type="text"
                                    name='lastName'
                                    value={lastName}
                                    onChange={handleChange}
                                    placeholder='e.g. Thakur'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

                            </div>
                            <div className='mb-2'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Your Image</label>
                                <input type="file"
                                    placeholder='e.g. Arun'
                                    name='image'
                                    onChange={handleChange}
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                            </div>
                            <div className='mb-2 relative'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Designation</label>
                                <input type="text"
                                    name="designation"
                                    value={designation}
                                    onChange={handleChange}
                                    placeholder='e.g. Web Developer'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />
                                {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}

                            </div>
                            <div className='mb-2 relative'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Address</label>
                                <input type="text"
                                    name="address"
                                    value={address}
                                    onChange={handleChange}
                                    placeholder='e.g. City Park'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

                            </div>
                            <div className='mb-10 relative'>
                                <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Email</label>
                                <input type="text"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder='e.g. abc@gmail.com'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                            </div>
                            <div className='mb-10 relative'>
                                <label htmlFor="" className='block font-semibold text-base mb-1 text-[#1e2532]'>Phone No:</label>
                                <input type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={handleChange}
                                    placeholder='e.g. 456-768-798, 567.654.002'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                            </div>
                            <div className='mb-10 relative'>
                                <label htmlFor="" className='block font-semibold text-base mb-1 text-[#1e2532]'>Summary</label>
                                <input type="text"
                                    name="summary"
                                    value={summary}
                                    onChange={handleChange}
                                    placeholder='e.g. Summary'
                                    className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />
                                {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default About

