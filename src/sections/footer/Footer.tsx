import React from 'react'
import './footer.scss'
import {images} from '../../global/exports'
import SectionWrapper from '../../wrappers/SectionWrapper'
import {AiFillMail, AiFillLinkedin, AiFillPhone,} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import MotionWrapper from '../../wrappers/MotionWrapper'

const Footer = () => {
    return (
        <div className="app__footer">
            <h2 className="head-text" style={{marginBottom: 20}}><span>Contacts</span></h2>

            <div className="app__footer-cards">
                <a
                    href="mailto:toniv3316@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-text app__footer-card"
                >
                    <AiFillMail className="p-text" style={{fontSize: '1.3rem'}}/>
                    toniv3316@gmail.com
                </a>
                <a
                    href="tel:+(058)422 45 75"
                    className="p-text app__footer-card"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillPhone className="p-text" style={{fontSize: '1.3rem'}}/>
                    (058) 422-45-75
                </a>
                <a
                    href="https://www.linkedin.com/in/anton-tsitovich"
                    className="p-text app__footer-card"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillLinkedin className="p-text" style={{fontSize: '1.3rem'}}/>
                    LinkedIn
                </a>
                <a
                    href="https://wa.me/972584224575"
                    className="p-text app__footer-card"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IoLogoWhatsapp className="p-text" style={{fontSize: '1.3rem'}}/>
                    WhatsApp
                </a>
            </div>
        </div>
    )
}
export default SectionWrapper(MotionWrapper(Footer, 'app__contacts'), 'contacts')
