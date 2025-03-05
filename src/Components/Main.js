import { useReducer} from "react";

import '../Css/Main.css';

import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from "./ConfirmedBooking";
import {Routes, Route, useNavigate} from 'react-router-dom';

import { submitAPI, updateTimes, initializeTimes } from "../Functions/timeReducerArguments";

function Main() {
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())

    const navigate = useNavigate();
    const submitForm = (formData) => {submitAPI(formData) ? navigate("/confirmation") : console.log("failed submission")};

    return (
        <main className="Main">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <>
                    <Route path="booking" element ={<BookingPage availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm}/>}/>
                    <Route path ="confirmation" element={<ConfirmedBooking/>}/>
                </>
            </Routes>
        </main>
    )
}

export default Main;