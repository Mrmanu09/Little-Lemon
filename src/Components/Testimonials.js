import '../Css/Testimonials.css';

import EmmaPortrait from '../Assets/emma portrait.jpg';
import MarkPortrait from '../Assets/mark portrait.jpg';
import JohnPortrait from '../Assets/john portrait.jpg';

import TestimonialCard from "./TestimonialCard";

var testimonialData = [
    {
        name: "Emma M.",
        rating: "5",
        quote: '"Best Bruchetta I ever had"',
        image: EmmaPortrait
    },
    {
        name: "Mark T.",
        rating: "5",
        quote: "Fast and great service",
        image: MarkPortrait
    },
    {
        name: "John D.",
        rating: "5",
        quote: "Delivery arrived quick and still fresh",
        image: JohnPortrait
    }
]

function Testimonials() {
    return (
        <div className="Testimonials">
            <h1>Testimonials</h1>
            <section>
                {testimonialData.map((testimonial) => {
                    return (
                        <TestimonialCard name={testimonial.name} rating={testimonial.rating} quote={testimonial.quote} image={testimonial.image}/>
                    )
                })}
            </section>
        </div>
    )
}

export default Testimonials;