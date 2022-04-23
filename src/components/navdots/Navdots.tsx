import React from 'react'

const Navdots: React.FC<{ active: string }> = ({active}) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'skills', 'works', 'contacts']
                .map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className="app__navigation-dot"
                        style={active === item ? {background: '#313BAC'} : {}}
                    />
                ))}
        </div>
    )
}

export default Navdots
