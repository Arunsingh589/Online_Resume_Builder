import React from 'react'

const Experience = ({ experiences = [], handleExperiencesChange }) => {


    const handleInputChange = (index, field, value) => {
        const updatedexperience = [...experiences];
        updatedexperience[index] = {
            ...updatedexperience[index],
            [field]: value
        }
        handleExperiencesChange(updatedexperience);
    }

    const addExperienceFiled = () => {
        handleExperiencesChange([...experiences, { title: '', company: '', location: '', startDate: '', endDate: '', description: '' }])
    };

    const removeExperienceField = (index) => {
        const filterExperience = experiences.filter((_, i) => i !== index)
        handleExperiencesChange(filterExperience)
    }

    return (
        <section className='py-4'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-1'>
                <div className='my-5'>
                    <div className=' mb-8'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532]  uppercase tracking-wider text-sm sm:text-lg'>experience</h3>
                    </div>
                    {
                        experiences.map((exp, index) => (
                            <div key={index} className='relative pt-7 px-4 md:px-8 pb-0 border border-black/10 mb-4'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                                    <div className='mb-2'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Title</label>
                                        <input type="text"
                                            value={exp.title}
                                            onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                            placeholder='e.g. title'
                                            className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-2'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Company / Organization</label>
                                        <input type="text"
                                            value={exp.company}
                                            onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                                            placeholder='e.g. company'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-2'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Location</label>
                                        <input type="text"
                                            value={exp.location}
                                            onChange={(e) => handleInputChange(index, 'location', e.target.value)}

                                            placeholder='e.g. city park'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Start Date</label>
                                        <input type="date"
                                            value={exp.startDate}
                                            onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-10 relative'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>End Date</label>
                                        <input type="date"
                                            value={exp.endDate}
                                            onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                                    </div>
                                    <div className='mb-10 relative'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Description</label>
                                        <input type="text"
                                            value={exp.description}
                                            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                            placeholder='e.g. description'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm px-4 py-2 w-full outline-none transition-all' />

                                    </div>

                                </div>
                                {
                                    index > 0 && (
                                        <button
                                            onClick={() => removeExperienceField(index)}
                                            className='absolute top-[10px] right-[10px] z-10 w-[25px] h-[25px] rounded-full bg-[#ca0b00] text-white text-lg flex items-center justify-center'
                                        >
                                            -
                                        </button>
                                    )}
                            </div>
                        ))}

                    <div className='flex justify-start mt-4'>
                        <button onClick={addExperienceFiled} className='text-white w-[25px] h-[25px] flex items-center justify-center absolute text-lg bg-[#1170CD]'>
                            +
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
