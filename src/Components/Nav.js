import '../Css/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className='nav-link'>HOME</Link></li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li><Link to="/booking" className='nav-link'>RESERVATIONS</Link></li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}

export default Nav;