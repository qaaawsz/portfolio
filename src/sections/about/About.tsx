import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import SectionWrapper from '../../wrappers/SectionWrapper'
import {urlFor, client} from '../../client'
import './about.scss'

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
                I Know That
                <span>Good Design</span>
                <br/>
                means
                <span>Good Business</span>
            </h2>
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

export default SectionWrapper(About, 'about')
