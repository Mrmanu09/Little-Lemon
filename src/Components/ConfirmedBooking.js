import { Link } from 'react-router-dom';
import '../Css/ConfirmedBooking.css';

function ConfirmedBooking() {
    return (
        <div id="confirmed-booking">
            <h1>Booking Confirmed</h1>
            <h2>We look forward to seeing you!</h2>
            <Link to="/" className="link-button"><button>Home</button></Link>
        </div>
    )
}

export default ConfirmedBooking;