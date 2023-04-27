import React from 'react'
import './itemcard.css'
import item from '../../assets/items/tenue1.jpg'
import { Link } from 'react-router-dom'

export default function ItemCard({ itemInfo }) {
    return (
        <Link to={'/produit/' + itemInfo?.id} className='link'>
            <div className='itemcard'>
                <div className="itemcard_container">
                    <img src={itemInfo?.img} alt="" className='trends_image' />
                </div>
                <div className="itemcard_infos">
                    <span className='itemcard_nom'>{itemInfo?.title}</span>
                    <span className='itemcard_prix'>{itemInfo?.price}€</span>
                </div>
            </div>
        </Link>
    )
}
