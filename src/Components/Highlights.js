import GreekSalad from '../Assets/greek salad.jpg';
import Bruchetta from '../Assets/bruchetta.JPG';
import LemonDesert from '../Assets/lemon dessert.jpg';

import ItemCard from "./ItemCard";

import '../Css/Highlights.css';

var currentSpecials = [
    {
        name: "Greek Salad",
        price: "$12.99",
        description: `In massa tempor nec feugiat nisl. Tempor orci dapibus ultrices in iaculis nunc sed augue.
        Nec nam aliquam sem et tortor consequat id porta. Auctor urna nunc id cursus metus aliquam.`,
        img: GreekSalad,
        alt: "Close up of our greek salad"
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: `In massa tempor nec feugiat nisl. Tempor orci dapibus ultrices in iaculis nunc sed augue.
        Nec nam aliquam sem et tortor consequat id porta. Auctor urna nunc id cursus metus aliquam.`,
        img: Bruchetta,
        alt: "Our bruchetta served on a plate"
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: `In massa tempor nec feugiat nisl. Tempor orci dapibus ultrices in iaculis nunc sed augue.
        Nec nam aliquam sem et tortor consequat id porta. Auctor urna nunc id cursus metus aliquam.`,
        img: LemonDesert,
        alt: "Close up of our lemon desert"
    }
];

function Highlights() {
    return (
        <section id="highlights">
            <h1>This Weeks Specials!</h1>
            <button>Online Menu</button>
            <section id="card-section">
                {currentSpecials.map((item) => {
                    return (<ItemCard item={item}/>)
                })}
            </section>
        </section>
    )
}

export default Highlights;