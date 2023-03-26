import React from 'react'
import './itemcard.css'
import item from '../../assets/items/tenue1.jpg'
import { Link } from 'react-router-dom'

export default function ItemCard() {
    return (
        <Link to='/produit/1'>
            <div className='itemcard'>
                <div className="itemcard_container">
                    <img src={item} alt="" className='trends_image' />
                </div>
                <div className="itemcard_infos">
                    <span className='itemcard_nom'>Robe de soirée</span>
                    <span className='itemcard_prix'>249,99€</span>
                </div>
            </div>
        </Link>
    )
}
