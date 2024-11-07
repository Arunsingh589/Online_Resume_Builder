import React from 'react';
import { FaEnvelopeOpenText, FaLocationPin, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
// import { MdSummarize } from "react-icons/md";

const ResumeTemplate = ({
    firstName,
    middleName,
    lastName,
    designation,
    address,
    email,
    phone,
    summary,
    image,
    skills,
    achievements,
    educations,
    experiences,
    projects,
    certificates
}) => {
    const printCV = () => {
        window.print();
    };

    return (
        <section id="resume-template">
            <div className='py-6 md:py-10'>
                <div className='mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8'>
                    {/* Grid layout always stays as two columns */}
                    <div className="rounded-lg grid grid-cols-[35%,auto] lg:grid-cols-[35%,auto] shadow-lg overflow-hidden">
                        {/* Left Section */}
                        <div className='pt-6 md:pt-10 pr-4 md:pr-8 pb-6 pl-3 md:pl-8 bg-[#084C41] text-white'>
                            <div className='mb-4'>
                                <div className='w-[70px] sm:w-[90px] md:w-[120px] h-[70px] sm:h-[90px] md:h-[120px] rounded-full  overflow-hidden mx-auto'>
                                    {image && <img src={URL.createObjectURL(image)} alt="" className='w-full  h-full object-cover' />}
                                </div>
                                <div className='mt-2 md:mt-4 text-center'>
                                    <span className='font-semibold text-white text-[10px] sm:text-sm md:text-lg block break-words'>
                                        {`${firstName} ${middleName ? middleName + ' ' : ''}${lastName}`}
                                    </span>
                                </div>
                                <div className="border-t-2 border-white/50 mx-auto w-1/3 my-2"></div>
                                <div className='text-center'>
                                    <span className="uppercase block font-semibold text-[8px] sm:text-sm md:text-lg tracking-wide break-words">
                                        {designation}
                                    </span>
                                </div>
                            </div>

                            {/* About Section */}
                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>About</h3>
                                <div className="flex items-start gap-1 md:gap-2 mt-2 text-[8px] sm:text-sm md:text-base opacity-95">
                                    <FaPhone className="shrink-0 mt-1" />
                                    <span className="break-words">{phone}</span>
                                </div>
                                <div className="flex items-start gap-1 md:gap-2  text-[8px] sm:text-sm md:text-base opacity-95">
                                    <IoMdMail className="shrink-0 mt-1" />
                                    <span className="break-words">{email}</span>
                                </div>
                                <div className="flex items-start  gap-1 md:gap-2  text-[8px] sm:text-sm md:text-base opacity-95">
                                    <FaLocationPin className="shrink-0 mt-1" />
                                    <span className="break-words">{address}</span>
                                </div>
                                <div className="flex items-start  gap-1 md:gap-2  text-[8px] sm:text-sm md:text-base opacity-95">
                                    <FaEnvelopeOpenText className="shrink-0 mt-1" />
                                    <span className="break-words">{summary}</span>
                                </div>
                            </div>


                            {/* Skills Section */}
                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>Skills</h3>
                                <div className="text-[8.5px] sm:text-sm md:text-base mb-1 mt-2 opacity-95 break-words">
                                    <ul className='list-disc pl-5'>
                                        {skills.map((skill, index) => (
                                            <li key={index}>{skill.skill}</li> // Handle empty skill input
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="p-6 sm:p-8 bg-white">

                            {/* achievement */}
                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>Achievements</h3>
                                <div className="text-[8.5px] sm:text-sm md:text-base mb-1 mt-2 opacity-95 break-words">
                                    {achievements.map((achievement, index) => (
                                        <div key={index} className='break-words'>

                                            <h2 className='bg-slate-900 bg-opacity-5 mt-2 md:mt-3 font-semibold text-[#1e2532]'>{achievement.title}</h2>
                                            <p className='pt-2'>{achievement.description}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            {/* education */}
                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>Educations</h3>
                                <div className="text-[8.5px] sm:text-sm md:text-base mb-1 mt-2 opacity-95 break-words">
                                    {educations.map((education, index) => (
                                        <div key={index} className='break-words'>
                                            <h2 className='bg-slate-900 bg-opacity-5 mt-2 md:mt-3 font-semibold text-[#1e2532]'>{education.school}</h2>
                                            <div className='flex text-[6px] sm:text-[10px] md:text-[17px] gap-1 md:gap-3 mt-2 md:pt-3'>
                                                <h2 className='font-semibold'>{education.degree}</h2>
                                                <h3 className=' italic'>{education.city}</h3>
                                                <h4 className='bg-[#084C41] text-white rounded-md px-1'>{education.startDate}</h4>
                                                <h4 className='bg-[#084C41] text-white rounded-md px-1'>{education.endDate}</h4>
                                            </div>
                                            <p className='text-opacity-80 pt-1 md:pt-3'>{education.description}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            {/* experience */}
                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>Experiences</h3>
                                <div className="text-[8.5px] sm:text-sm md:text-base mb-1 mt-2 opacity-95 break-words">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className='break-words'>
                                            <h2 className='bg-slate-900 bg-opacity-5 mt-2 md:mt-3 font-semibold text-[#1e2532]'>{exp.title}</h2>
                                            <div className='flex text-[6px] sm:text-[10px] md:text-[17px] gap-1 md:gap-3 mt-2 md:pt-3'>
                                                <h2 className='font-semibold'>{exp.company}</h2>
                                                <h3 className=' italic'>{exp.location}</h3>
                                                <h4 className='bg-[#084C41] text-white rounded-md px-1'>{exp.startDate}</h4>
                                                <h4 className='bg-[#084C41] text-white rounded-md px-1'>{exp.endDate}</h4>
                                            </div>
                                            <p className='text-opacity-80 pt-1 md:pt-3'>{exp.description}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            {/* projects */}
                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>Projects</h3>
                                <div className="text-[8.5px] sm:text-sm md:text-base mb-1 mt-2 opacity-95 break-words">
                                    {projects.map((project, index) => (
                                        <div key={index} className='break-words'>
                                            <div className='flex items-center gap-1 bg-slate-900 bg-opacity-5 mt-2 md:mt-3'>
                                                <h2 className='font-semibold text-[#1e2532]'>{project.projectname}</h2>
                                                <a href={project.projectlink} target="_blank" rel="noopener noreferrer" className='font-semibold'>
                                                    <RiExternalLinkFill />
                                                </a>

                                            </div>
                                            <p className='text-opacity-80 pt-1 md:pt-3'>{project.description}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>


                            {/* certificates */}

                            <div className='py-2 md:py-4 mb-2 md:mb-4'>
                                <h3 className='uppercase tracking-wider border-b font-bold text-xs sm:text-sm md:text-lg border-black/10 pb-1 md:pb-2'>Certificates</h3>
                                <div className="text-[8.5px] sm:text-sm md:text-base mb-1 mt-2 opacity-95 break-words">
                                    {certificates.map((certificate, index) => (
                                        <div key={index} className='break-words'>
                                            <ul className='flex items-center list-disc gap-1 bg-slate-900 bg-opacity-5 mt-2 md:mt-3'>
                                                <li className='font-semibold text-[#1e2532]'>{certificate.certificatename}</li>
                                                <a href={certificate.certificatelink} target="_blank" rel="noopener noreferrer" className='font-semibold'>
                                                    <RiExternalLinkFill />
                                                </a>

                                            </ul>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Print Button */}
            <div className='mt-4 mb-16 md:mb-24'>
                <div className='max-w-full md:max-w-[1300px] mx-auto text-center'>
                    <button className='btn btn-primary font-semibold transition-colors px-3 py-2 sm:px-4 sm:py-2 print-button' onClick={printCV}>
                        Print CV
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResumeTemplate;
