import React from "react";
import './Promo.css';

function Promo () {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className="promo__container_heading">Учебный проект студента факультета Веб-разработки.</h1>
                <nav className="promo__navtab">
                    <ul className="promo__navtab_items">

                        <li className="promo__navtab_item">
                            <a className="promo__navtab_link" href="#about">
                                О проекте
                            </a>
                        </li>

                        <li className="promo__navtab_item ">
                            <a className="promo__navtab_link" href="#techs">
                                Технологии
                            </a>
                        </li>

                        <li className="promo__navtab_item ">
                            <a className="promo__navtab_link" href="#student">
                                Студент
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )

}

export default Promo;