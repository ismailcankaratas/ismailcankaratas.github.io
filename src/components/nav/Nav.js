import React, { useEffect, useState } from 'react'
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineBrokenImage } from 'react-icons/md';

export default function Nav() {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" className={activeNav == '#' ? 'active' : ''} onClick={() => setActiveNav('#')}>
                <AiOutlineHome />
            </a>
            <a href="#about" className={activeNav == '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}>
                <AiOutlineUser />
            </a>
            <a href="#experience" className={activeNav == '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}>
                <BiBook />
            </a>
            <a href="#portfolio" className={activeNav == '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('portfolio')}>
                <MdOutlineBrokenImage />
            </a>
            <a href="#contact" className={activeNav == '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}
