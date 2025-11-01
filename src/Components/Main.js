import { useReducer} from "react";

import '../Css/Main.css';

import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from "./ConfirmedBooking";
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import {Routes, Route, useNavigate} from 'react-router-dom';

import { submitAPI, updateTimes, initializeTimes } from "../Functions/timeReducerArguments";
import Highlights from "./Highlights";

function Main() {
    //use a simulated API to set the available times available for a given date for a reservation
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())

    //control how reservation form submissions should be handled. On successful form submission, navigate to the confirmation page
    const navigate = useNavigate();
    const submitForm = (formData) => {submitAPI(formData) ? navigate("/confirmation") : console.log("failed submission")};

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Highlights/>}/>
                <Route path="/order-online" element={<OrderOnline/>}/>
                <Route path="/login" element={<Login/>}/>
                <>
                    <Route path="/booking" element ={<BookingPage availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm}/>}/>
                    <Route path="/confirmation" element={<ConfirmedBooking/>}/>
                </>
            </Routes>
        </main>
    )
}

export default Main;