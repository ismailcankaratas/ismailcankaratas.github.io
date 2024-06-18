import React from "react";
import "./portfolio.css";
import { BsGithub } from "react-icons/bs";

// Portfolio Images
import VoiceAssistantImage from "../../assets/portfolio/voice-assistant.png";
import ChristmasRaffle from "../../assets/portfolio/christmas-raffle.png";
import IftaraNeKadarKaldi from "../../assets/portfolio/iftaraNeKadarKaldi.png";

const data = [
  {
    id: 1,
    image: ChristmasRaffle,
    title: "Christmas Raffle",
    badges: ["NextJs v3", "TypeScript", "TailwindCSS", "MongoDB"],
    description:
      "Sistem, çekilise katılanları gelistirdigimiz bir algoritma ile eslestirilmesi ve birbirlerine alacakları sürpriz hediyelerle tanısmasına dayanıyor.",
    github: "https://github.com/ismailcankaratas/christmas-raffle",
    demo: "",
  },
  {
    id: 2,
    image: IftaraNeKadarKaldi,
    title: "İftara Ne Kadar Kaldi?",
    badges: ["ReactJS v18", "Redux Toolkit", "Tailwind", "Collect API"],
    description:
      "Türkiye deki tüm illerin iftar vakitlerine ne kadar kaldığını gösteren proje.",
    github: "https://github.com/ismailcankaratas/iftaraNeKadarKaldi",
    demo: "https://ismailcankaratas.com.tr/iftaraNeKadarKaldi/",
  },
  {
    id: 3,
    image: VoiceAssistantImage,
    title: "Voice Assistant",
    badges: ["Python", "OpenAI API"],
    description:
      "OpenAI'nin doğal dil işleme yetenekleri ve Python programlama dilinin gücünden faydalanarak geliştirilmiş kullanıcının doğal dilini anlayabilen bir sesli asistandır.",
    github: "https://github.com/ismailcankaratas/voice-assistant",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7040641536480452609/",
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
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
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
