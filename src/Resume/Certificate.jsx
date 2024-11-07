import React, { useState } from 'react'

const Certificate = ({ certificates = [], handleCertificatesChange, errors }) => {

    const handleInputChange = (index, field, value) => {
        const updatedCertificate = [...certificates];
        updatedCertificate[index] = {
            ...updatedCertificate[index],
            [field]: value
        }
        handleCertificatesChange(updatedCertificate)

    }

    const addCertificateField = () => {
        handleCertificatesChange([...certificates, { certificatename: '', certificatelink: '' }])
    }

    const removeCertificateField = (index) => {
        const filteredSkill = certificates.filter((_, i) => i !== index)
        handleCertificatesChange(filteredSkill)
    }
    return (
        <section className='py-4'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-1'>
                <div className='my-5'>
                    <div className=' mb-8'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532]  uppercase tracking-wider text-sm sm:text-lg'>certificates</h3>
                    </div>
                    {
                        certificates.map((certificate, index) => (
                            <div key={index} className='relative pt-7 px-4 md:px-8 pb-0 border border-black/10 mb-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Certificate Name</label>
                                        <input type="text"
                                            value={certificate.certificatename}
                                            onChange={(e) => handleInputChange(index, 'certificatename', e.target.value)}
                                            placeholder='e.g. certificate in javascript'
                                            className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all' />
                                        {errors.certificates && errors.certificates[index]?.certificatename && (
                                            <span className="text-red-500 text-sm">{errors.certificates[index].certificatename}</span>
                                        )}


                                    </div>
                                    <div className='mb-10'>
                                        <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Certificate Link</label>
                                        <input type="text"
                                            value={certificate.certificatelink}
                                            onChange={(e) => handleInputChange(index, 'certificatelink', e.target.value)}
                                            placeholder='e.g. link'
                                            className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all' />
                                        {errors.certificates && errors.certificates[index]?.certificatelink && (
                                            <span className="text-red-500 text-sm">{errors.certificates[index].certificatelink}</span>
                                        )}
                                    </div>

                                </div>
                                {
                                    index > 0 && (
                                        <button
                                            onClick={() => removeCertificateField(index)}
                                            className='absolute top-[10px] right-[10px] z-10 w-[25px] h-[25px] rounded-full bg-[#ca0b00] text-white text-lg flex items-center justify-center'
                                        >
                                            -
                                        </button>
                                    )}
                            </div>
                        ))}

                    <div className='flex justify-start mt-4'>
                        <button onClick={addCertificateField} className='text-white w-[25px] h-[25px] flex items-center justify-center absolute text-lg bg-[#1170CD]'>
                            +
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate
