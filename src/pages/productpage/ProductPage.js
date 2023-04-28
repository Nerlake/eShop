import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { itemsList } from '../../data/itemsList'

import './productpage.css'
import { useParams } from 'react-router-dom'
import Galery from '../../components/gallery/Galery'

export default function ProductPage() {

    const productId = useParams();
    const currentItem = itemsList.find(item => item.id === parseInt(productId.id));

    return (
        <>
            <Navbar />
            <div className="productpage">
                <div className="productpage_container">
                    <div className="productpage_left">
                        {/* <div className="productpage_image_container">
                            <img src={currentItem?.img} className="productpage_image" alt="produit" />
                        </div> */}
                        <Galery photos={currentItem?.img} />
                    </div>
                    <div className="productpage_right">
                        <div className="productpage_info">
                            <p className="productpage_category">{currentItem?.category.toUpperCase()}</p>
                            <h1 className="productpage_name">{currentItem?.title}</h1>
                            {'⭐'.repeat(currentItem?.rate)}
                            <p className="productpage_description">{currentItem?.desc}</p>
                            <p className="productpage_price">{currentItem?.price}€</p>
                        </div>
                        <hr />
                        <div className="productpage_sizeguide">
                            <h2 className="productpage_sizeguide_title">Guide des tailles</h2>
                            <div className="productpage_sizeguide_container">
                                <div className="productpage_sizeguide_item">
                                    <div className="productpage_sizeguide_item_title">Taille</div>
                                    <div className="productpage_sizeguide_item_value_container">
                                        <div className="productpage_sizeguide_item_value">XS</div>
                                        <div className="productpage_sizeguide_item_value">S</div>
                                        <div className="productpage_sizeguide_item_value productpage_sizeguide_item_value_selected">M</div>
                                        <div className="productpage_sizeguide_item_value productpage_sizeguide_item_value_indisponible" >L</div>
                                        <div className="productpage_sizeguide_item_value">XL</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productpage_color">
                            <div className="productpage_color_container">
                                <div className="productpage_color_item">
                                    <div className="productpage_color_item_title">Couleurs</div>
                                    <div className="productpage_color_item_value_container">
                                        <div className="productpage_color_item_value" id='red'></div>
                                        <div className="productpage_color_item_value" id='blue'></div>
                                        <div className="productpage_color_item_value productpage_color_item_value_selected" id='black'></div>
                                        <div className="productpage_color_item_value productpage_color_item_value_indisponible" id='white'></div>
                                        <div className="productpage_color_item_value" id='green'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productpage_quantity">
                            <div className="productpage_quantity_container">
                                <div className="productpage_quantity_item">
                                    <div className="productpage_quantity_item_title">Quantité</div>
                                    <div className="productpage_quantity_item_value_container">
                                        <span className='plusmoins'>-</span>
                                        <span className='productpage_quantity_item_value_container_number'>1</span>
                                        <span className='plusmoins'>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
