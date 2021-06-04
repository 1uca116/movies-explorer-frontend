import logo from '../../images/logo.svg';
import './Header.css'
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
    return (
        <section className='header'>
            <Link to="/"><img className="header__logo" alt="Лого" src={logo}/></Link>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;