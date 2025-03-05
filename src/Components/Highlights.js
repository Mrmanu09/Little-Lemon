import GreekSalad from '../Assets/greek salad.jpg';
import Bruchetta from '../Assets/bruchetta.JPG';
import LemonDesert from '../Assets/lemon dessert.jpg';

import ItemCard from "./ItemCard";

import '../Css/Highlights.css';

var currentSpecials = [
    {
        name: "Greek Salad",
        price: "$12.99",
        description: "In massa tempor nec feugiat nisl. Tempor orci dapibus ultrices in iaculis nunc sed augue. \
        Nec nam aliquam sem et tortor consequat id porta. Auctor urna nunc id cursus metus aliquam.",
        img: GreekSalad
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: "In massa tempor nec feugiat nisl. Tempor orci dapibus ultrices in iaculis nunc sed augue. \
        Nec nam aliquam sem et tortor consequat id porta. Auctor urna nunc id cursus metus aliquam.",
        img: Bruchetta
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: "In massa tempor nec feugiat nisl. Tempor orci dapibus ultrices in iaculis nunc sed augue. \
        Nec nam aliquam sem et tortor consequat id porta. Auctor urna nunc id cursus metus aliquam.",
        img: LemonDesert
    }
];

function Highlights() {
    return (
        <div className="Highlights">
            <h1>This Weeks Specials!</h1>
            <button>Online Menu</button>
            <section className="CardSection">
                {currentSpecials.map((item) => {
                    return (<ItemCard name={item.name} price={item.price} description={item.description} img={item.img}/>)
                })}
            </section>
        </div>
    )
}

export default Highlights;