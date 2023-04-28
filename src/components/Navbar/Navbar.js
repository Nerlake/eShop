import React, { useEffect } from 'react'
import "./navbar.css"
import logo from '../../assets/logo_rm.png'
import { Menu, Person, Search, ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Navbar({ light = false }) {


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.querySelector('.navbar_category_container').classList.add('fixed-top')
            } else {
                document.querySelector('.navbar_category_container').classList.remove('fixed-top')
            }
        })
    }, [light])



    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="nav_menu_gauche">
                    <Link to="/"><img src={logo} alt="logo" className='navbar_logo' /></Link>
                </div>
                <div className='navbar_menu_centre'>
                    <Link to="/a-propos-de-moi" className='link'><div className="navbar_menu_item">A propos de moi</div></Link>
                    <Link to='/' className="link" ><div className="navbar_menu_item">Boutique</div></Link>
                    <Link to="/contact" className='link'><div className="navbar_menu_item">Contact</div></Link>
                </div>
                <div className='navbar_menu_droit'>
                    <div className="navbar_menu_item"><Search /></div>
                    <div className="navbar_menu_item"><ShoppingCart /></div>
                    <div className="navbar_menu_item"><Person /></div>
                    <div className='navbar_menu_item' id='hmbg_item'><Menu /></div>
                </div>
            </div>
            {!light && (
                <div className="navbar_category_container">
                    <Link to="/jupes" className='link'><div className="navbar_category_item">Jupes</div></Link>
                    <Link to="/shorts" className='link'><div className="navbar_category_item">Shorts</div></Link>
                    <Link to="/hauts" className='link'><div className="navbar_category_item">Hauts</div></Link>
                    <Link to="/robes" className='link'><div className="navbar_category_item">Robes</div></Link>
                    <Link to="/pantalons" className='link'><div className="navbar_category_item">Pantalons</div></Link>
                </div>
            )}
        </div>
    )
}
