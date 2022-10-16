import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xszkdhn', 'template_t325w7v', form.current, 'AWpZoTo6HeUPjBhwS')
      .then((result) => {
        toast("Mesaj başarıyla gönderildi");
      }, (error) => {
        toast("Bir hata oluştu");
      });

    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>İletişime Geç</h5>
      <h2>Bana Ulaş</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='icon' />
            <h4>Email</h4>
            <h5>ismailcankaratasss@gmail.com</h5>
            <a href="mailto:ismailcankaratasss@gmail.com" target="_blank">Mesaj Gönder</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='icon' />
            <h4>Linkedin</h4>
            <h5>@ismailcankaratas</h5>
            <a href="https://www.linkedin.com/in/ismailcankaratas/" target="_blank">Mesaj Gönder</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <input type="text" name="name" placeholder='Adınız Soyadınız' required />
          <input type="email" name='email' placeholder='Email Adresiniz' required />
          <textarea name='message' rows="7" placeholder='Mesajınız' required></textarea>
          <input type="hidden" value={window.location.href} />
          <button type='submit' className='btn btn-primary'>Mesaj Gönder</button>
        </form>
      </div>
    </section>
  )
}
