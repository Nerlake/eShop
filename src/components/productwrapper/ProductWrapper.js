import React from 'react'
import './productwrapper.css'
import item from '../../assets/items/tenue1.jpg'
import ItemCard from '../itemcard/ItemCard'

export default function ProductWrapper({ listItems }) {

    return (
        <div className='productwrapper'>
            <div className="productwrapper_container">
                {listItems.map(item => {
                    return <ItemCard key={item.id} itemInfo={item} />
                })}
            </div>
        </div>
    )
}
