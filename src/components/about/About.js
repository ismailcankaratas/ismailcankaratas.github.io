import React from 'react'
import "./about.css";
import ME from '../../assets/İsmailCan.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function about() {
  return (
    <section id='about'>
      <h5>Tanımak</h5>
      <h2>Hakkımda</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} alt="Hakkımda Resim" />
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Tecrübe</h5>
              <small>1+ Yıl </small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Müşteriler</h5>
              <small>10+ Dünya Çapında</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proje</h5>
              <small>5+ Tamamlandı </small>
            </article>
          </div>

          <p>
            Web geliştiricisiyim, frontend alanında <strong>React</strong> kütüphanelerinde deneyimliyim <strong>Nodejs</strong> ve <strong>.Net</strong> ile backend alanında deneyimliyim. Tercihen <strong>MERN stack</strong> çalışmayı isterim.
            <br />
            <br />
            Beni motive eden şey kod yazmak. Hiç yoktan yazılım yaratmak eğlenceli ve güzel.
          </p>
          <a href="#contact" className='btn btn-primary'>İletişime Geç</a>
        </div>
      </div>
    </section>
  )
}
