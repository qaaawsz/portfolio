import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

const Socials = () => {
    return (
        <div className="app__social">
            <a
                href="https://github.com/qaaawsz"
                target="_blank"
                rel="noreferrer"
            >
                <div><AiFillGithub/></div>
            </a>
            <a
                href="https://www.linkedin.com/in/anton-tsitovich"
                target="_blank"
                rel="noreferrer"
            >
                <div><AiFillLinkedin/></div>
            </a>
            <a
                href="https://wa.me/972584224575"
                target="_blank"
                rel="noreferrer"
            >
                <div><AiOutlineWhatsApp/></div>
            </a>
        </div>
    )
}

export default Socials
