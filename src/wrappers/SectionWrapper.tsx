import React from 'react'
import Socials from '../components/socials/Socials'
import Navdots from '../components/navdots/Navdots'

const SectionWrapper = (Component: React.FC, idName: string, classNames?: string) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <Socials/>
            <div className="app__wrapper app__flex">
                <Component/>

                <div className="copyright">
                    <p className="p-text">2020</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <Navdots active={idName}/>
        </div>
    )
}

export default SectionWrapper
