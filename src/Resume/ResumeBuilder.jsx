import React, { useState } from 'react';
import About from './About'; // Adjust the path based on your project structure
import ResumeTemplate from './ResumeTemplate'; // Adjust the path based on your project structure
import Skill from './Skill';
import Achievements from './Achievements';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Certificate from './Certificate';
const ResumeBuilder = () => {
    const [resumeData, setResumeData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        designation: '',
        address: '',
        email: '',
        phone: '',
        summary: '',
        image: null,
        skills: [{ skill: '' }],
        achievements: [{ title: '', description: '' }],
        educations: [{ school: '', degree: '', city: '', startDate: '', endDate: '', description: '' }],
        experiences: [{ title: '', company: '', location: '', startDate: '', endDate: '', description: '' }],
        projects: [{ projectname: '', projectlink: '', description: '' }],
        certificates: [{ certificatename: '', certificatelink: '' }],
        errors: {}
    });


    // for validation
    const validateField = (name, value) => {
        setResumeData((prevData) => {
            const newErrors = { ...prevData.errors };

            // If name corresponds to an array field
            if (Array.isArray(value)) {
                newErrors[name] = value.map((item, index) => {
                    const errorsForItem = {};
                    for (const [key, val] of Object.entries(item)) {
                        errorsForItem[key] = val ? '' : `${key} is invalid`;
                    }
                    return errorsForItem;
                });
            } else {
                newErrors[name] = value ? '' : `${name} is invalid`;
            }

            return {
                ...prevData,
                errors: newErrors,
            };
        });
    };


    // for about
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setResumeData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
        validateField(name, type === 'file' ? files[0] : value);
    };

    // for skill 
    const handleSkillsChange = (updatedSkills) => {
        setResumeData((prevData) => ({
            ...prevData,
            skills: updatedSkills, // Update the skills in resumeData
        }));
        validateField("skills", updatedSkills);
    };

    // for achievements
    const handleAchievementsChange = (updatedAchievements) => {
        setResumeData((prevData) => ({
            ...prevData,
            achievements: updatedAchievements, // Update the skills in resumeData
        }));
        validateField("achievements", updatedAchievements)
    };

    // for educations 
    const handleEducationsChange = (updatedEducations) => {
        setResumeData((prevData) => ({
            ...prevData,
            educations: updatedEducations, // Update the skills in resumeData
        }));
        validateField("educations", updatedEducations)
    };

    // for experience

    const handleExperiencesChange = (updatedExperiences) => {
        setResumeData((prevData) => ({
            ...prevData,
            experiences: updatedExperiences, // Update the skills in resumeData
        }));
        validateField("experiences", updatedExperiences)
    };

    // for project
    const handleProjectsChange = (updatedProjects) => {
        setResumeData((prevData) => ({
            ...prevData,
            projects: updatedProjects, // Update the skills in resumeData
        }));
        validateField("projects", updatedProjects)
    };

    // for certificates

    const handleCertificatesChange = (updatedCertificates) => {
        setResumeData((prevData) => ({
            ...prevData,
            certificates: updatedCertificates, // Update the skills in resumeData
        }));
        validateField("certificates", updatedCertificates)
    };

    // console.log('Resume Data:', resumeData); // Log resume data for debugging

    return (
        <div>
            <About
                {...resumeData} // Spread operator to pass state as props
                handleChange={handleChange} // Pass handleChange function
                errors={resumeData.errors}
            />
            <Education
                {...resumeData}
                handleEducationsChange={handleEducationsChange}
                errors={resumeData.errors}

            />
            <Experience
                {...resumeData}
                handleExperiencesChange={handleExperiencesChange}
                errors={resumeData.errors}

            />
            <Achievements
                {...resumeData}
                handleAchievementsChange={handleAchievementsChange}
                errors={resumeData.errors}

            />

            <Project
                {...resumeData}
                handleProjectsChange={handleProjectsChange}
                errors={resumeData.errors}

            />
            <Skill
                skills={resumeData.skills} // Pass the skills array as a prop
                handleSkillsChange={handleSkillsChange} // Pass handleSkillsChange function
                errors={resumeData.errors}

            />
            <Certificate
                {...resumeData}
                handleCertificatesChange={handleCertificatesChange}
                errors={resumeData.errors}

            />
            <ResumeTemplate
                {...resumeData} // Spread operator to pass state as props
            />
        </div>
    );
};

export default ResumeBuilder;
