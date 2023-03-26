import React from 'react'
import ItemCard from '../itemcard/ItemCard'
import './trends.css'

export default function Trends() {
    return (
        <div className='trends'>
            <div className="trends_container">
                <h2>Les tendances du moments</h2>
                <div className="trends_wrapper_container">
                    <div className="trends_wrapper">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
