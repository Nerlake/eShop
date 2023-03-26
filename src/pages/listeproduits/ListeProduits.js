import { FilterAlt } from '@mui/icons-material'
import React from 'react'
import Filter from '../../components/filter/Filter'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductWrapper from '../../components/productwrapper/ProductWrapper'
import Trends from '../../components/trends/Trends'
import './listeproduits.css'

export default function ListeProduits({ title }) {
    return (
        <>
            <Navbar />
            <div className='listeproduits'>
                <span>9 produit(s) trouvé(s) pour "{title}"</span>
                <Filter />
                <div className="listeproduit_wrapper">
                    <h2>{title}</h2>
                    <ProductWrapper />
                </div>
            </div>
            <Footer />
        </>
    )
}
