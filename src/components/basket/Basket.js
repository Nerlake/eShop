import React from 'react'
import "./basket.css";
import { ArrowRight, Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../redux/basketSlice';


export default function Basket({ open, setOpen }) {

    const basket = useSelector((state) => state.basket)

    const dispatch = useDispatch()

    console.log(basket)


    return (
        <>
            {
                open && (
                    <div className='basket_background'>
                        <div className="basket_window" onClick={() => console.log("Vous ne pouvez pas fermer le panier ici")}>
                            <div className="basket_window_top">
                                <div className="basket_window_top_title">Mon panier</div>
                                <div className="basket_window_top_close" onClick={() => setOpen(false)}>X</div>
                            </div>
                            <div className="basket_window_content">
                                <div className="basket_window_content_item_container">
                                    {basket?.basket?.map((item, index) => {
                                        return (
                                            <div className="basket_window_content_item" key={index}>
                                                <ArrowRight />
                                                <input type="number" defaultValue={1} className='number_select' />
                                                <span>{item.title}</span>
                                                <span>{item.price}€</span>
                                                <span>{item.value}€</span>
                                                <Delete className='icon' onClick={() => dispatch(removeFromBasket(item.id))} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="basket_window_bottom">
                                <div className="basket_window_bottom_total">
                                    <span>Total : </span>
                                    <span> {15 * 2}€</span>
                                </div>
                                <button className="basket_window_bottom_button" onClick={() => {
                                    console.log("Commande effectuée")
                                }}>Commander</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
