import {Outlet, Link} from 'react-router-dom';

import foodPhoto from '../Assets/restaurantfood.jpg';

import '../Css/HeroSection.css';

function HeroSection() {
    return (
        <div className="Hero-Section">
            <article className="Hero-Text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="Lead-Text">We are a family owned Mediterranean restaurant, focused on
                 traditional recipes served with a modern twist.</p>
                <Link to="/booking" className="Link-Button"><button>Reserve a Table</button></Link>
            </article>
            <img src={foodPhoto} width="330" height="388" alt="restaurant food served on a plate" className="Hero-Image"></img>
        </div>
    )
}

export default HeroSection;