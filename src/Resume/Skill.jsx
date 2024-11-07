import React from 'react';

const Skill = ({ skills = [], handleSkillsChange, errors }) => {
    // Ensure there is at least one skill input field
    const handleInputChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = { skill: value }; // Update the skill at the specific index
        handleSkillsChange(updatedSkills); // Call the handler to update the parent state
    };

    const addSkillField = () => {
        handleSkillsChange([...skills, { skill: '' }]); // Add a new empty skill
    };

    const removeSkillField = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        handleSkillsChange(updatedSkills); // Update the state in the parent component
    };

    return (
        <section className='py-4'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-1'>
                <div className='my-5'>
                    <div className='mb-8'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532] uppercase tracking-wider text-sm sm:text-lg'>Skills</h3>
                    </div>
                    {skills.map((skill, index) => (
                        <div key={index} className='relative pt-7 px-4 md:px-8 pb-0 border border-black/10 mb-4'>
                            <div className='grid grid-cols-1 gap-6'>
                                <div className='mb-10'>
                                    <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Skill</label>
                                    <input
                                        type="text"
                                        value={skill.skill}
                                        onChange={(e) => handleInputChange(index, e.target.value)} // Pass value to handle input change
                                        placeholder='e.g. java, python'
                                        className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all'
                                    />
                                    {errors.skills && errors.skills[index]?.skill && (
                                        <span className="text-red-500 text-sm">{errors.skills[index].skill}</span>
                                    )}
                                </div>
                            </div>
                            {index > 0 && ( // Show remove button for fields other than the first
                                <button
                                    onClick={() => removeSkillField(index)}
                                    className='absolute top-[10px] right-[10px] z-10 w-[25px] h-[25px] rounded-full bg-[#ca0b00] text-white text-lg flex items-center justify-center'
                                >
                                    -
                                </button>
                            )}
                        </div>
                    ))}
                    <div className='flex justify-start mt-4'>
                        <button
                            onClick={addSkillField} // Add skill field on click
                            className='text-white w-[25px] h-[25px] flex items-center justify-center absolute text-lg bg-[#1170CD]'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
