import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import './productpage.css'
import ImageProduit from '../../assets/items/tenue1.jpg'

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <div className="productpage">
                <div className="productpage_container">
                    <div className="productpage_left">
                        <div className="productpage_image_container">
                            <img src={ImageProduit} className="productpage_image" alt="produit" />
                        </div>
                    </div>
                    <div className="productpage_right">
                        <div className="productpage_info">
                            <p className="productpage_category">Robes</p>
                            <h1 className="productpage_name">Robe de soirée collection T-BO</h1>
                            <p className="productpage_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea libero nesciunt molestiae ipsam nobis dolorem amet non delectus odio, incidunt consequuntur accusamus in velit, iure minus doloribus distinctio dolore minima quos! Commodi consectetur asperiores earum quia omnis ratione harum quod ab eligendi maxime quis vel voluptate, illum quisquam magni dicta fugiat. Esse consequatur nam quae beatae asperiores doloremque nulla odit.</p>
                            <p className="productpage_price">100€</p>
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
