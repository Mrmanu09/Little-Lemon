import '../Css/Header.css'
import Nav from "./Nav";
import logo from '../Assets/Logo 16@4x.png'

function Header() {
    return (
        <header>
            <img alt="Little Lemon Logo" src={logo} width="193.04px" height="54px"/>
            <Nav/>
        </header>
    )
}

export default Header;