import React from 'react'
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
    return (
        <section id='experience'>
            <h5>Ne Yeteneklerim Var</h5>
            <h2>Deneyimlerim</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Orta Düzey</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>Wordpress</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>Vue</h4>
                                <small className='text-light'>Temel</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End Of Frontend */}
                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div><div></div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Deneyimli</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>.Net</h4>
                                <small className='text-light'>Orta Düzey</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>MsSql</h4>
                                <small className='text-light'>Orta Düzey</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className="icon" />
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Temel</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
