import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/ismailcan-2.jpeg'
import HeaderSocials from './HeaderSocials'
export default function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Merhaba Ben</h5>
                <h1>İsmail Can Karataş</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className='scroll__down'>Aşağı Kaydır</a>
            </div>
        </header>
    )
}
