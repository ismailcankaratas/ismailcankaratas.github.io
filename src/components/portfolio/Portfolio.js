import React from "react";
import "./portfolio.css";
import { BsGithub } from "react-icons/bs";

// Portfolio Images
import Vevez from "../../assets/portfolio/vevez.png";
import ChristmasRaffle from "../../assets/portfolio/christmas-raffle.png";
import AI from "../../assets/portfolio/ai.png";

const data = [
  {
    id: 1,
    image: ChristmasRaffle,
    title: "Christmas Raffle",
    badges: ["NextJs v3", "TypeScript", "TailwindCSS", "MongoDB"],
    description:
      "Sistem, çekilise katılanları gelistirdigimiz bir algoritma ile eslestirilmesi ve birbirlerine alacakları sürpriz hediyelerle tanısmasına dayanıyor.",
    github: "https://github.com/ismailcankaratas/christmas-raffle",
  },
  {
    id: 2,
    image: AI,
    title: "Yapay Zeka Destekli Asistan",
    badges: ["Python", "OpenAI", "REST API"],
    description:
      "Çalışan verimliliğini artırmak için, şirket belgelerini analiz eden ve kullanıcı sorularına yanıt veren yapay zeka destekli bir asistan geliştirdim. Bu projede, Python ve ChatGPT API kullanarak doğal dil işleme (NLP) ve makine öğrenimi tekniklerini entegre ettim.",
  },
  {
    id: 3,
    image: Vevez,
    title: "Çok Dilli Gastronomi Platformu",
    badges: ["React", "NextJS", "Typescript"],
    description:
      "VEVEZ, 100'den fazla dil desteği, kişiselleştirilmiş yemek önerileri, kolay sipariş, güvenli ödemeler, rezervasyonlar ve gastronomik rehberler içeren küresel bir yemek platformudur. React, Next.js ve TypeScript ile oluşturulmuştur.",
    demo: "https://www.vevez.com/",
  },
];

export default function Portfolio({ id, navKey, observerRefs }) {
  return (
    <section id={id} ref={(el) => (observerRefs.current[navKey] = el)}>
      <h5>Son Çalışmalarım</h5>
      <h2>Portföy</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, badges, description, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item_badges">
                {badges.map((badge) => (
                  <span>{badge}</span>
                ))}
              </div>
              <p className="text-light">{description}</p>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <a
        href="https://github.com/ismailcankaratas"
        target="_blank"
        className="portfolio__button btn btn-primary"
      >
        <BsGithub />
        Daha Fazlası
      </a>
    </section>
  );
}
