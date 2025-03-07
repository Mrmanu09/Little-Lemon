import '../Css/Footer.css'

import Logo from '../Assets/Asset 20@4x.png';

function Footer() {
    return (
        <footer>
            <hr/>
            <img src={Logo} alt="Little Lemon logo"/>
            <ul id="doormat-nav">
                <li><h3 className="Section-Title">Navigation</h3></li>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
            <ul id="contact-links">
                <li><h3>Contact</h3></li>
                <li><a>Phone Number</a></li>
                <li><a>Email</a></li>
            </ul>
            <ul id="social-links">
                <li><h3>Social Media Links</h3></li>
                <li><a>Facebook</a></li>
                <li><a>Instagram</a></li>
                <li><a>X</a></li>
                <li><a>Youtube</a></li>
            </ul>
        </footer>
    )
}

export default Footer;