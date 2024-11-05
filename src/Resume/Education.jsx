import React from 'react'

const Education = ({ educations = [], handleEducationsChange }) => {



    const handleInputChange = (index, field, value) => {
        const updatedEducation = [...educations];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [field]: value
        }
        handleEducationsChange(updatedEducation)

    }

    const addEducationField = () => {
        handleEducationsChange([...educations, { school: '', degree: '', city: '', startDate: '', endDate: '', description: '' }])
    }

    const removeEducationField = (index) => {
        const filteredEducation = educations.filter((_, i) => i !== index)
        handleEducationsChange(filteredEducation)
    }

    return (
        <section className='py-4'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-1'>
                <div className='my-5'>
                    <div className=' mb-8'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532]  uppercase tracking-wider text-sm sm:text-lg'>education</h3>
                    </div>
                    {
                        educations.map((education, index) => (
                            <div key={index} className='relative pt-7 px-4 md:px-8 pb-0 border border-black/10 mb-4'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                                    <div className='mb-2'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>School</label>
                                        <input type="text"
                                            value={education.title}
                                            onChange={(e) => handleInputChange(index, 'school', e.target.value)}
                                            placeholder='e.g. school'
                                            className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-2'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Degree</label>
                                        <input type="text"
                                            value={education.company}
                                            onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                                            placeholder='e.g. degree'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-2'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>City</label>
                                        <input type="text"
                                            value={education.location}
                                            onChange={(e) => handleInputChange(index, 'city', e.target.value)}

                                            placeholder='e.g. Faridabad'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Start Date</label>
                                        <input type="date"
                                            value={education.startDate}
                                            onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-10 relative'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>End Date</label>
                                        <input type="date"
                                            value={education.endDate}
                                            onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-10 relative'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Description</label>
                                        <input type="text"
                                            value={education.description}
                                            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                            placeholder='e.g. description'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                                    </div>

                                </div>
                                {
                                    index > 0 && (
                                        <button
                                            onClick={() => removeEducationField(index)}
                                            className='absolute top-[10px] right-[10px] z-10 w-[25px] h-[25px] rounded-full bg-[#ca0b00] text-white text-lg flex items-center justify-center'
                                        >
                                            -
                                        </button>
                                    )}
                            </div>
                        ))}

                    <div className='flex justify-start mt-4'>
                        <button onClick={addEducationField} className='text-white w-[25px] h-[25px] flex items-center justify-center absolute text-lg bg-[#1170CD]'>
                            +
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
