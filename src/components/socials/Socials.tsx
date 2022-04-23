import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

const Socials = () => {
    return (
        <div className="app__social">
            <div><AiFillGithub/></div>
            <div><AiFillLinkedin/></div>
            <div><AiOutlineWhatsApp/></div>
        </div>
    )
}

export default Socials
