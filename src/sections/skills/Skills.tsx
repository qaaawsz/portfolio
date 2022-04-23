import React, {useState, useEffect} from 'react'
import SectionWrapper from '../../wrappers/SectionWrapper'
import {urlFor, client} from '../../client'
import {motion} from 'framer-motion'
import './skills.scss'
import MotionWrapper from '../../wrappers/MotionWrapper'

const Skills = () => {
    const [skills, setSkills] = useState<any[]>([])
    const [experiences, setExperiences] = useState<any>([])

    useEffect(() => {
        (async () => {
            try {
                setExperiences(await client.fetch('*[_type == "experiences"]'))
                setSkills(await client.fetch('*[_type == "skills"]'))
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <div>
            <h2 className="head-text"><span>Skills</span> And <span>Experience</span></h2>

            <div className="app__skills-container">
                <motion.div
                    className="app__skills-list"
                >
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style={{background: skill.bgColor}}>
                                <img src={urlFor(skill.icon).url()} alt={skill.name}/>
                            </div>
                            <p className="p-text">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="app__skills-exp"
                >
                    {experiences?.map((experience: any) => (
                        <motion.div key={experience.year} className="app__skills-exp-item">
                            <div className="app__skills-exp-year">
                                <p className="bold-text">
                                    {experience.year}
                                </p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {
                                    experience.works.map((work: any) => (
                                        <motion.div
                                            whileInView={{opacity: [0, 1]}}
                                            transition={{duration: 0.5}}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                            <p className="p-text">{work.desc}</p>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(MotionWrapper(Skills, 'app__skills'), 'skills', 'app__whitebg')
