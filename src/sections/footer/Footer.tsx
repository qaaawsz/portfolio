import React from 'react'
import './footer.scss'
import {images} from '../../global/exports'

const Footer = () => {
    return (
        <>
            <h2 className="head-text">Contacts</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:toniv3316@gmail.com" className="p-text">toniv3316@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone"/>
                    <a href="tel:+(058)422 45 75" className="p-text">(058) 422-45-75</a>
                </div>
            </div>
        </>
    )
}

export default Footer
