import React from 'react'
import './productwrapper.css'
import item from '../../assets/items/tenue1.jpg'
import ItemCard from '../itemcard/ItemCard'

export default function ProductWrapper() {



    return (
        <div className='productwrapper'>
            <div className="productwrapper_container">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}
