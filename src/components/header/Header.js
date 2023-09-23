import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ismailcankaratas.jpeg";
import HeaderSocials from "./HeaderSocials";
export default function Header({ id, navKey, observerRefs }) {
  return (
    <header id={id} ref={(el) => (observerRefs.current[navKey] = el)}>
      <div className="container header__container">
        <h5>İsmail Can Karataş'ın</h5>
        <h1> Dijital Portfolyosuna Hoş Geldiniz!</h1>
        <h5 className="text-light">
          {" "}
          Bu site, yazılım geliştirme tutkumu ve web projelerimi paylaştığım
          kişisel bir alan. React ve Node.js gibi teknolojilerle çalışarak
          edindiğim deneyimleri ve projeleri burada bulabilirsiniz.
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Aşağı Kaydır
        </a>
      </div>
    </header>
  );
}
