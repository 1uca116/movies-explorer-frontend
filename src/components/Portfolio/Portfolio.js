import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h4 className='portfolio__header'>Портфолио</h4>
            <ul className='portfolio__links'>
                <li className='portfolio__links-item'>
                    <a href='https://1uca116.github.io/how-to-learn' target='_blank' rel='noreferrer' className='portfolio__link'>Статичный сайт</a>
                </li>
                <li className='portfolio__links-item'>
                    <a href='https://1uca116.github.io/russian-travel' target='_blank' rel='noreferrer' className='portfolio__link'>Адаптивный сайт</a>
                </li>
                <li className='portfolio__links-item'>
                    <a href='https://lucia-mesto.nomoredomains.club' target='_blank' rel='noreferrer' className='portfolio__link'>Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;