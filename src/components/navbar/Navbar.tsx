import React, {MouseEventHandler, useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {images} from '../../global/exports'
import './navbar.scss'

const navigation = (closeMenu: MouseEventHandler<HTMLLIElement>, isPC?: boolean) => (
    <ul className={isPC ? 'app__navbar-links' : ''}>
        {['home', 'about', 'skills', 'works', 'contacts']
            .map((item) => (
                <li
                    key={isPC ? `link-${item}` : item}
                    className={isPC ? 'app__flex p-text' : ''}
                    onClick={closeMenu}
                >
                    {isPC && <div/>}
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
    </ul>
)

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const openMenu = () => setToggle(true)
    const closeMenu = () => setToggle(false)

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo"/>
            </div>
            {navigation(closeMenu, true)}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={openMenu}/>
                {
                    toggle && (
                        <motion.div
                            whileInView={{x: [300, 0]}}
                            transition={{duration: 0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={closeMenu}/>
                            {navigation(closeMenu)}
                        </motion.div>
                    )}
            </div>
        </nav>
    )
}

export default Navbar
