import React from 'react'
import "./portfolio.css"
import portfolio from '../../assets/null-portfolio.jpg'
import TrelloClone from "../../assets/trelloClone.png"

const data = [
    {
        id: 1,
        image: portfolio,
        title: "Trello Clone",
        description: "React ile Trello Clone uygulaması.",
        github: "https://github.com/ismailcankaratas/TrelloClone",
        demo: "https://ismailcankaratas.github.io/TrelloClone/"
    },
    {
        id: 2,
        image: portfolio,
        title: "İftara Nekadar Kaldı?",
        description: "React ile Türkiye'deki tüm şehirlerin iftara nekadar kaldığını hesaplayan uygulama.",
        github: "https://github.com/ismailcankaratas/iftaraNeKadarKaldi",
        demo: "https://iftaranekadarkaldi.netlify.app/"
    },
    {
        id: 3,
        image: portfolio,
        title: "Blazor Battles",
        description: ".NET Blazor savaş oyunu.",
        github: "https://github.com/ismailcankaratas/BlazorBattles",
        demo: "https://github.com/ismailcankaratas/BlazorBattles"
    },
]


export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>Son Çalışmalarım</h5>
            <h2>Portföy</h2>

            <div className='container portfolio__container'>

                {
                    data.map(({ id, image, title, description, github, demo }) => {
                        return (
                            <article className='portfolio__item' key={id}>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <p className='text-light'>{description}</p>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
