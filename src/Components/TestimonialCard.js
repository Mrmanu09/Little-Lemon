import '../Css/TestimonialCard.css';

function TestimonialCard(props) {
    return (
        <div className="Testimonial-Card">
            <h3 className="Card-Title">{props.rating} / 5 <i class="fa-solid fa-star"></i> Rating</h3>
            <img src={props.image} alt="portrait of customer"/>
            <h3 className="Section-Title">{props.name}</h3>
            <p className="Card-Text">"{props.quote}"</p>
        </div>
    )
}

export default TestimonialCard;