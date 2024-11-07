import React, { useState } from 'react'

const Project = ({ projects = [], handleProjectsChange, errors }) => {

    const handleInputChange = (index, field, value) => {
        const updatedProject = [...projects];
        updatedProject[index] = {
            ...updatedProject[index],
            [field]: value
        }
        handleProjectsChange(updatedProject)

    }

    const addProjectField = () => {
        handleProjectsChange([...projects, { projectname: '', projectlink: '', description: '' }])
    }

    const removeProjectField = (index) => {
        const filteredPeoject = projects.filter((_, i) => i !== index)
        handleProjectsChange(filteredPeoject)
    }

    return (
        <section className='py-4'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-1'>
                <div className='my-5'>
                    <div className=' mb-8'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532]  uppercase tracking-wider text-sm sm:text-lg'>projects</h3>
                    </div>
                    {
                        projects.map((project, index) => (
                            <div key={index} className='relative pt-7 px-4 md:px-8 pb-0 border border-black/10 mb-4'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Project Name</label>
                                        <input type="text"
                                            value={project.projectname}
                                            onChange={(e) => handleInputChange(index, 'projectname', e.target.value)}
                                            placeholder='e.g. project name'
                                            className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all' />
                                        {errors.projects && errors.projects[index]?.projectname && (
                                            <span className="text-red-500 text-sm">{errors.projects[index].projectname}</span>
                                        )}
                                    </div>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Project Link</label>
                                        <input type="text"
                                            value={project.projectlink}
                                            onChange={(e) => handleInputChange(index, 'projectlink', e.target.value)}
                                            placeholder='e.g. link'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />
                                        {errors.projects && errors.projects[index]?.projectlink && (
                                            <span className="text-red-500 text-sm">{errors.projects[index].projectlink}</span>
                                        )}
                                    </div>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Description</label>
                                        <input type="text"
                                            value={project.description}
                                            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                            placeholder='e.g. description'
                                            className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all' />
                                        {errors.projects && errors.projects[index]?.description && (
                                            <span className="text-red-500 text-sm">{errors.projects[index].description}</span>
                                        )}
                                    </div>

                                </div>
                                {
                                    index > 0 && (
                                        <button
                                            onClick={() => removeProjectField(index)}
                                            className='absolute top-[10px] right-[10px] z-10 w-[25px] h-[25px] rounded-full bg-[#ca0b00] text-white text-lg flex items-center justify-center'
                                        >
                                            -
                                        </button>
                                    )}
                            </div>
                        ))}

                    <div className='flex justify-start mt-4'>
                        <button onClick={addProjectField} className='text-white w-[25px] h-[25px] flex items-center justify-center absolute text-lg bg-[#1170CD]'>
                            +
                        </button>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Project
