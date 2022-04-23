import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import SectionWrapper from '../../wrappers/SectionWrapper'
import {urlFor, client} from '../../client'
import {motion} from 'framer-motion'
import './works.scss'
import MotionWrapper from '../../wrappers/MotionWrapper'

const Works = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All')
    const [animateCard, setAnimateCard] = useState<any>({y: 0, opacity: 1})
    const [works, setWorks] = useState<any[]>([])
    const [filteredWorks, setFilteredWorks] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            try {
                const data = await client.fetch('*[_type == "works"]')
                setWorks(data)
                setFilteredWorks(data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])


    const handleWorkFilter = (item: any) => {
        setActiveFilter(item)
        setAnimateCard([{y: 100, opacity: 0}])

        setTimeout(() => {
            setAnimateCard([{y: 0, opacity: 1}])

            if (item === 'All') {
                setFilteredWorks(works)
            } else {
                setFilteredWorks(works.filter((work) => work.tags.includes(item)))
            }
        }, 500)
    }

    return (
        <div>
            <h2 className="head-text">
                My <span>Portfolio</span>
            </h2>
            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'React JS', 'All']
                    .map((item) => (
                        <div
                            key={item}
                            onClick={() => handleWorkFilter(item)}
                            className={`app__work-filter-item app__flex p-text ${activeFilter === item && 'item-active'}`}
                        >
                            {item}
                        </div>
                    ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__work-portfolio"
            >
                {
                    filteredWorks.map((work, i) => (
                        <div key={i} className="app__work-item app__flex">
                            <div className="app__work-img app__flex">
                                <img src={urlFor(work.imgUrl).url()} alt={work.name}/>
                                <motion.div
                                    whileHover={{opacity: [0, 1]}}
                                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                    className="app__work-hover app_flex"
                                >
                                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{scale: [0, 1]}}
                                            whileHover={{scale: [1, 0.9]}}
                                            transition={{duration: 0.25}}
                                            className="app__flex"
                                        >
                                            <AiFillEye/>
                                        </motion.div>
                                    </a>
                                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{scale: [0, 1]}}
                                            whileHover={{scale: [1, 0.9]}}
                                            transition={{duration: 0.25}}
                                            className="app__flex"
                                        >
                                            <AiFillGithub/>
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">{work.title}</h4>
                                <p className="p-text" style={{marginTop: 10}}>{work.description}</p>

                                <div className="app__work-tag app__flex">
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default SectionWrapper(MotionWrapper(Works, 'app__works'), 'works')
