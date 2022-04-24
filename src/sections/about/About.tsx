import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import SectionWrapper from '../../wrappers/SectionWrapper'
import {urlFor, client} from '../../client'
import './about.scss'
import MotionWrapper from '../../wrappers/MotionWrapper'
import {images} from '../../global/exports'

const About = () => {
    const [abouts, setAbouts] = useState<any[]>([])
    useEffect(() => {
        (async () => {
            try {
                setAbouts(await client.fetch('*[_type == "abouts"]'))
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <div>
            <h2 className="head-text">
                About <span>Me</span>
            </h2>
            <div style={{width: '80%', margin: 'auto'}}>
                <p style={{fontSize: '1.1rem', marginTop: 20, textAlign: 'center'}} className="p-text">
                    Hello. I am a <span className="bold-text">front end developer</span> with <span
                    className="bold-text">2+</span> years of experience in building and maintaining complex web apps,
                    specializing in SPA development utilizing React ecosystem. Proficient in <span
                    className="bold-text">React</span>, <span className="bold-text">Redux</span>, <span
                    className="bold-text">TypeScript</span>, <span className="bold-text">JavaScript</span>. Have an eye
                    on <span className="bold-text">responsive</span> web design, and use a <span
                    className="bold-text">mobile-first</span> approach during development. Used to work in a fast-paced,
                    collaborative environment, well-versed in <span className="bold-text">Scrum</span> and <span
                    className="bold-text">Agile</span>.
                </p>
                <p style={{fontSize: '1.1rem', marginTop: 20, textAlign: 'center'}} className="p-text">
                    You can find my resume{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={images.resume}
                    >
                        here
                    </a>
                </p>
            </div>
            <div className="app__profiles">
                {
                    abouts.map((about) => (
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{
                                duration: 0.5,
                                type: 'tween'
                            }}
                            className="app__profile-item"
                            key={about.title}
                        >
                            <img src={urlFor(about.imgUrl).url()} alt={about.title}/>
                            <h2 className="bold-text" style={{marginTop: 20}}>
                                {about.title}
                            </h2>
                            <p className="p-text" style={{marginTop: 10}}>
                                {about.description}
                            </p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionWrapper(MotionWrapper(About, 'app__about'), 'about', 'app__whitebg')
