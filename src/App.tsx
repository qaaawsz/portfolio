import React from 'react'
import './App.scss'
import {About, Header, Skills, Works, Footer, Navbar} from './global/exports'

function App() {
    return (
        <div className="app">
            <Navbar/>
            <Header/>
            <About/>
            <Works/>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default App
