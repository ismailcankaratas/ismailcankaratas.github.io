import React from 'react'
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs';

export default function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/ismailcankaratas/" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/ismailcankaratas" target="_blank">
                <BsGithub />
            </a>
            <a href="https://stackoverflow.com/users/17546497/%c4%b0smail-can-karata%c5%9f" target="_blank">
                <BsStackOverflow />
            </a>
        </div>
    )
}
