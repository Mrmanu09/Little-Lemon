import '../Css/Footer.css'

import Logo from '../Assets/Asset 20@4x.png';

function Footer() {
    return (
        <footer>
            <hr/>
            <img src={Logo} alt="Little Lemon logo"/>
            <ul id="doormat-nav">
                <li><h3 className="Section-Title">Navigation</h3></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            <ul id="contact-links">
                <li><h3>Contact</h3></li>
                <li><a href="/">Phone Number</a></li>
                <li><a href="/">Email</a></li>
            </ul>
            <ul id="social-links">
                <li><h3>Social Media Links</h3></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">X</a></li>
                <li><a href="/">Youtube</a></li>
            </ul>
        </footer>
    )
}

export default Footer;