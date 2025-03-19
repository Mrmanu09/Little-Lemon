import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import '../Css/Header.css'
import Nav from "./Nav";
import logo from '../Assets/Logo 16@4x.png'

function Header() {

    const headerBox = useRef(null);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > prevScrollPos) {
                headerBox.current.style.transform = "translateY(-200px)";
            } else {
                headerBox.current.style.transform = "translateY(0px)";
            }
            prevScrollPos = window.scrollY;
        }
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); }
    }, []);

    return (
        <header ref={headerBox}>
            <Link to="/" id="header-img"><img alt="Little Lemon Logo" src={logo} width="193.04px" height="54px"/></Link>
            <Nav/>
        </header>
    )
}

export default Header;