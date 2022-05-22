import React from 'react'
import CV from "../../assets/ismailcankaratas-cv.pdf";

export default function CTA() {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>CV İndir</a>
            <a href="#contact" className='btn btn-primary'>İletişime Geç</a>
        </div>
    )
}
