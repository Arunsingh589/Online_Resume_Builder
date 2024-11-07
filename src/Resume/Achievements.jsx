import React from 'react'

const Achievements = ({ achievements = [], handleAchievementsChange, errors }) => {

    const handleInputChange = (index, field, value) => {
        const updatedAchievements = [...achievements];
        updatedAchievements[index] = {
            ...updatedAchievements[index],
            [field]: value // This updates only the specific field (either 'title' or 'description')
        };
        handleAchievementsChange(updatedAchievements);
    };


    const addAchievement = () => {
        handleAchievementsChange([...achievements, { title: '', description: '' }]);
    };

    const removeAchievement = (index) => {
        const updatedAchievements = achievements.filter((_, i) => i !== index);
        handleAchievementsChange(updatedAchievements);
    };

    return (
        <section className='py-4'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-8 pt-1'>
                <div className='my-1'>
                    <div className='mb-4'>
                        <h3 className='text-white py-2 font-medium px-4 bg-[#1e2532] uppercase tracking-wider text-sm sm:text-lg'>
                            Achievements
                        </h3>
                    </div>
                    {achievements.map((achievement, index) => (
                        <div key={index} className='pt-7 px-4 md:px-8 pb-4 border border-black/10 mb-4 relative'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='mb-7'>
                                    <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Title</label>
                                    <input
                                        type="text"
                                        placeholder='e.g. title'
                                        value={achievement.title}
                                        onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                        className='border focus:border-[rgba(0,0,0,0.3)] border-black/10 text-sm py-2 px-4 w-full outline-none transition-all'
                                    />
                                    {errors.achievements && errors.achievements[index]?.title && (
                                        <span className="text-red-500 text-sm">{errors.achievements[index].title}</span>
                                    )}

                                </div>
                                <div className='mb-7'>
                                    <label className='block font-semibold text-base mb-1 text-[#1e2532]'>Description</label>
                                    <input
                                        type="text"
                                        placeholder='e.g. description'
                                        value={achievement.description}
                                        onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                        className='border border-black/10 focus:border-[rgba(0,0,0,0.3)] text-sm py-2 px-4 w-full outline-none transition-all'
                                    />
                                    {errors.achievements && errors.achievements[index]?.description && (
                                        <span className="text-red-500 text-sm">{errors.achievements[index].description}</span>
                                    )}

                                </div>
                            </div>
                            {/* Remove button positioned at the top-right corner */}
                            {index > 0 && (
                                <button
                                    onClick={() => removeAchievement(index)}
                                    className='absolute top-[10px] right-[10px] z-10 w-[25px] h-[25px] rounded-full bg-[#ca0b00] text-white text-lg flex items-center justify-center hover:bg-[#b30900]'
                                >
                                    -
                                </button>
                            )}
                        </div>
                    ))}
                    <div className='flex justify-start mt-4'>
                        <button
                            onClick={addAchievement}
                            className='text-white w-[25px] h-[25px] flex items-center justify-center absolute text-lg bg-[#1170CD]'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
