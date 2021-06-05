import './AboutMe.css';
import MyPhoto from '../../images/my-photo.jpg';

function AboutMe() {
    return (
        <section className='about-me' id="student">
            <h2 className='about-me__header section__heading'>Студент</h2>
            <div className='about-me__information'>
                <div className='about-me__information_text'>
                    <h3 className='about-me__information_title'>Люция</h3>
                    <p className='about-me__information_subtitle'>Фронтенд-разработчик, 26 лет</p>
                    <p className='about-me__information_paragraph'>Я родилась в Татарстане, но уже больше 8 лет живу в подмосковном городке Лобня. За плечами магистратура в МИИТе, отучилась на HR специалиста, но мир фронтенда нравится мне больше. Люблю корейскую культуру и электронную музыку.</p>
                    <div className='about-me__information_links'>
                        <a href='https://www.facebook.com/Lutsia116' target='_blank' rel='noreferrer' className='about-me__information_link'>Facebook</a>
                        <a href='https://github.com/1uca116' target='_blank' rel='noreferrer' className='about-me__information_link'>Github</a>
                    </div>
                </div>
                <img src={MyPhoto} className='about-me__information_photo' alt='Моё фото'/>
            </div>
        </section>
    )
}

export default AboutMe