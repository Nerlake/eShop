import { CheckBox, FilterAlt } from '@mui/icons-material'
import React from 'react'
import './filter.css'

export default function Filter() {
    return (
        <div className='filter'>
            <div className="filter_container">
                <div><FilterAlt /><span>Filtres</span></div>
                <div className="filter_wrapper">
                    <div className="filter_item">
                        <span className='filter_title'>Genre : </span>
                        <div className='filter_result'>
                            <div className='filter_list'><input type="checkbox" /><span>Hommes</span></div>
                            <div className='filter_list'><input type="checkbox" /><span>Femmes</span></div>
                            <div className='filter_list'><input type="checkbox" /><span>Enfants</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
