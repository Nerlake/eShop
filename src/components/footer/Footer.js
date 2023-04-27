import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="column">
                    <div className="footer_item">Politique de confidentialité</div>
                    <div className="footer_item">Mentions Légales</div>
                    <div className="footer_item">CGV</div>
                </div>
                <div className="column">
                    <div className="footer_info">©2023 Alexandra THEBAULT, Tous droits réservés.</div>
                </div>
            </div>
        </div>
    )
}
