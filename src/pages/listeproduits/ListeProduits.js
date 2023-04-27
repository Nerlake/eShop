import { itemsList } from '../../data/itemsList'
import React from 'react'
import Filter from '../../components/filter/Filter'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductWrapper from '../../components/productwrapper/ProductWrapper'
import Trends from '../../components/trends/Trends'
import './listeproduits.css'

export default function ListeProduits({ title }) {

    //récupérer les produits de la catégorie en question
    const products = itemsList.filter(item => item.category === title.toLowerCase())




    return (
        <>
            <Navbar />
            <div className='listeproduits'>
                <span>{products.length} produit(s) trouvé(s) pour "{title}"</span>
                {/* <Filter /> */}
                <div className="listeproduit_wrapper">
                    <h2>{title}</h2>
                    <ProductWrapper listItems={products} />
                </div>
            </div>
            <Footer />
        </>
    )
}
