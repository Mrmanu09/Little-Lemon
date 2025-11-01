import '../Css/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className='nav-link'>HOME</Link></li>
                <li><Link to="/about" className='nav-link'>ABOUT</Link></li>
                <li><Link to="/menu" className='nav-link'>MENU</Link></li>
                <li><Link to="/booking" className='nav-link'>RESERVATIONS</Link></li>
                <li><Link to="/order-online" className='nav-link'>ORDER ONLINE</Link></li>
                <li><Link to="/login" className='nav-link'>LOGIN</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;