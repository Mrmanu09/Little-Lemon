import '../Css/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="Nav">
            <ul className="Nav-List">
                <li><Link to="/" className='Nav-Link'>HOME</Link></li>
                <li><a>ABOUT</a></li>
                <li><a>MENU</a></li>
                <li><Link to="/booking" className='Nav-Link'>RESERVATIONS</Link></li>
                <li><a>ORDER ONLINE</a></li>
                <li><a>LOGIN</a></li>
            </ul>
        </nav>
    )
}

export default Nav;