import React from 'react'
import ItemCard from '../itemcard/ItemCard'
import './trends.css'
import { itemsList } from '../../data/itemsList'

export default function Trends() {


    itemsList.sort((a, b) => b.rate - a.rate);
    const products = itemsList.slice(0, 6)



    return (
        <div className='trends'>
            <div className="trends_container">
                <h2>Les tendances du moments</h2>
                <div className="trends_wrapper_container">
                    <div className="trends_wrapper">
                        {products.map(item => {
                            return <ItemCard key={item.id} itemInfo={item} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
