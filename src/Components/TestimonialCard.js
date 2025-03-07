import '../Css/TestimonialCard.css';

function TestimonialCard(props) {
    return (
        <div className="testimonial-card">
            <h3 className="card-title">{props.testimonial.rating} / 5 <i class="fa-solid fa-star"></i> Rating</h3>
            <img src={props.testimonial.image} alt="portrait of customer"/>
            <h3 className="section-title">{props.testimonial.name}</h3>
            <p className="card-text">"{props.testimonial.quote}"</p>
        </div>
    )
}

export default TestimonialCard;