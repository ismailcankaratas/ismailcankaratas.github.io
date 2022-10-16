import React from 'react'
import "./portfolio.css"
import portfolio from '../../assets/null-portfolio.jpg'
import TrelloClone from "../../assets/trelloClone.png"
import { BsGithub } from 'react-icons/bs';

const data = [
    {
        id: 1,
        image: portfolio,
        title: "Dbcopycat",
        description: "Json verilerinizi bir dosyaya kaydeden ve CRUD işlemlerini gerçekleştirmenizi kolaylaştıran bir JSON Veritabanı.",
        github: "https://github.com/ismailcankaratas/dbcopycat",
        demo: "https://www.npmjs.com/package/dbcopycat"
    },
    {
        id: 2,
        image: "https://repository-images.githubusercontent.com/539013996/25dd0874-2203-4686-90fc-bc7be9ccb894",
        title: "Contrib Chat",
        description: "Github hesabıyla giriş yaparak. GitHub'da katkıda bulunduğunuz repolarda katkıda bulunanlarla sohbet edebilirsiniz.",
        github: "https://github.com/ismailcankaratas/contribchat",
        demo: "https://contribchat.vercel.app/"
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
            <a href='https://github.com/ismailcankaratas' target="_blank" className='portfolio__button btn btn-primary'>
                <BsGithub />
                Daha Fazlası</a>
        </section>
    )
}
