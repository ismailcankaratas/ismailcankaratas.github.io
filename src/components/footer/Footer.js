import React from 'react'
import "./footer.css";
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>İsmail</a>

      <ul className='permlinks'>
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#experience">Deneyim</a></li>
        <li><a href="#portfolio">Portföy</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>

      <div className='footer__socials'>
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
      <div className='footer__copyright'>
        <small>&copy; İsmail Can Karataş. All rights reserved.</small>
      </div>
    </footer>
  )
}
