import { Link } from 'react-router-dom';

import foodPhoto from '../Assets/restaurantfood.jpg';

import '../Css/HeroSection.css';

function HeroSection() {
    return (
        <section id="hero-section">
            <article id="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="lead-text">We are a family owned Mediterranean restaurant, focused on
                 traditional recipes served with a modern twist.</p>
                <Link to="/booking" className="link-button"><button>Reserve a Table</button></Link>
            </article>
            <img src={foodPhoto} width="330" height="388" alt="restaurant food served on a plate"></img>
        </section>
    )
}

export default HeroSection;