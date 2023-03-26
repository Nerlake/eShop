import React from 'react'
import background from "../../assets/background.jpg"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Trends from '../../components/trends/Trends'
import './accueil.css'

export default function accueil() {
    return (
        <>
            <Navbar />
            <div className='accueil'>
                <div className="accueil_container">
                    <div className="accueil_background">
                        <img src={background} alt="" className='accueil_image' />
                    </div>
                    <Trends />
                </div>
            </div>
            <Footer />
        </>
    )
}
