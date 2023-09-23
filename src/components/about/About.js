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
              <small>2+ Yıl </small>
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
            Web geliştiriciyim <strong>ReactJS</strong> ve{" "}
            <strong>NodeJS</strong> teknolojileriyle çalışıyorum. Web alanındaki
            becerilerimi ve bilgilerimi sürekli olarak geliştirme yolunda
            ilerliyorum. Sorunları çözme becerim güçlü ve gelecekteki
            zorluklarla başa çıkmayı hızla öğrenme yeteneğine sahibim
          </p>
          <p>
            Ekip çalışmasına uyumlu ve iletişim becerilerim güçlüdür. Gönüllü
            projelerde lider olarak görev aldım. Proje süreçlerini etkin bir
            şekilde yönetmek için <strong>Git</strong> ve{" "}
            <strong>GitHub</strong> gibi araçları kullanarak agile
            metodolojileri benimsiyorum.
          </p>
          <p>
            Son zamanlarda <strong>Python</strong> ile makine öğrenimi ve yapay
            zeka alanına ilgi duymaya başladım. Bu alanda yeni yetenekler
            edinmeye ve teknik bilgilerimi daha da derinleştirmeye
            odaklanıyorum.
          </p>
          <p>
            Benim için en önemli hedef, kullanıcı deneyimini en üst düzeye
            çıkarmak ve yaratıcı çözümler üretmektir. Yeni projelerde çalışmak
            ve katkı sağlamak için sabırsızlanıyorum.
          </p>
          <a href="#contact" className="btn btn-primary">
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
