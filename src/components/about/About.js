import React from "react";
import "./about.css";
import ME from "../../assets/İsmailCan.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About({ id, navKey, observerRefs }) {
  return (
    <section id={id} ref={(el) => (observerRefs.current[navKey] = el)}>
      <h5>Tanımak</h5>
      <h2>Hakkımda</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="Hakkımda Resim" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Tecrübe</h5>
              <small>3+ Yıl </small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Müşteriler</h5>
              <small>10+ Dünya Çapında</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proje</h5>
              <small>20+ Tamamlandı </small>
            </article>
          </div>
          <p>
            Üç yıllık deneyime sahip bir yazılım geliştiricisiyim.{" "}
            <strong>React</strong> ve <strong>Node.js</strong> ile kullanıcı
            deneyimini iyileştiren ve iş süreçlerini kolaylaştıran uygulamalar
            geliştirdim. Ayrıca <strong>Generative AI</strong> projelerinde yer
            alarak yapay zeka tabanlı çalışmalar yapıyorum. Frontend ve backend
            alanlarında edindiğim deneyimler, yeni teknolojilere kolayca adapte
            olmamı ve sürekli gelişmemi sağlıyor.
          </p>
          <a href="#contact" className="btn btn-primary">
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
