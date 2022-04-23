import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../global/exports'
import SectionWrapper from '../../wrappers/SectionWrapper'
import './header.scss'

const Header = () => {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <header className="app__header app__flex">
            <motion.div
                whileInView={{
                    x: [-100, 0],
                    opacity: [0, 1]
                }}
                transition={{duration: 0.5}}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Anton</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">Web Developer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__header-img"
            >
                <img src={images.profile} alt="photo"/>
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className="overlay_circle"
                    src={images.circle}
                    alt="profile bg"
                />
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {
                    [images.flutter, images.redux, images.sass].map((image, i) => (
                        <div className="circle-cmp app__flex" key={`circle-${i}`}>
                            <img src={image} alt="circle"/>
                        </div>
                    ))}
            </motion.div>

        </header>
    )
}

export default SectionWrapper(Header, 'home')
