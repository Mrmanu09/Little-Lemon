import { useState } from "react";

import logo from '../Assets/Asset 9@4x.png';
import '../Css/BookingForm.css';

function BookingForm(props) {
    //data about users reservation
    const [fieldData, setFieldData] = useState({
        date: "",
        "res-time": "--select--",
        guests: "",
        occasion: ""
    })

    //data about the invalid data errors in the form
    const [fieldErrors, setFieldErrors] = useState({
        "date-error": "",
        "res-time-error": "",
        "guests-error": "",
        "occasion-error": ""
    })

    const handleError = (name, value) => {setFieldErrors(prevErrors => ({...prevErrors, [name] : value}))}

    const handleChange = e => {
        //on any form field change, update form data and detect errors in input
        const name = e.target.name;
        const value = e.target.value;
        if (name === "date") {
            //deny chosen date if it is from a date that has passed
            const invalidDateThresh = new Date()
            invalidDateThresh.setDate(invalidDateThresh.getDate()-2)
            if(new Date(value) < invalidDateThresh){
                handleError("date-error", "Can not book for a date that has passed");
            }
            else{
                //no error found
                handleError("date-error", "");
                props.dispatchAvailableTimes(value);
            }
        } else if (name === "res-time"){
            if(value === "--select--"){
                //deny chosen time if the option chosen is the placeholder option which reads --select--
                handleError("res-time-error", "Please select an option");
            } else {
                //no error found
                handleError("res-time-error", "");
            }
        }

        setFieldData(prevFieldData => ({...prevFieldData, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        //deny form submission if user has no selected an option for reservation time
        if (fieldData["res-time"] === "--select--"){
            handleError("res-time-error", "Please select an option");
            return;
        }
        props.submitForm(fieldData);
    }

    return (
        <form id="booking-form" onSubmit={handleSubmit}>
            <h1>Reserve a Table</h1>
            <h2>Book a table for any occasion</h2>
            <label for="res-date">Date</label>
            <input type="date" id="res-date" name="date" value={fieldData['date']} onChange={handleChange} required className={fieldErrors['date-error'] === "" ? "valid-date" : "invalid-date"}/>
            <p id="date-error" style={fieldErrors['date-error'] === "" ? {} : {"display": "block"}}>{fieldErrors['date-error']}</p>
            <label for="res-time">Time</label>
            <select id="res-time" name="res-time" value={fieldData['res-time']} onChange={handleChange} className={fieldErrors['res-time-error'] === "" ? "valid-select" : "invalid-select"}>
                <option value="--select--" key="select">--select--</option>
                {props.availableTimes.map((time) => <option value={time} key={time}>{time}</option>)}
            </select>
            <p id="time-error" style={fieldErrors['res-time-error'] === "" ? {} : {"display": "block"}}>{fieldErrors['res-time-error']}</p>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={fieldData['guests']} onChange={handleChange}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={fieldData['occasion']} className="valid-select" onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Reserve Table" name="submit" disabled={
                !(fieldErrors['date-error'] === ""
                && fieldErrors['res-time-error'] === ""
                && fieldErrors['guests-error'] === ""
                && fieldErrors['occasion-error'] === ""
                )} aria-label="submit form"/>
            <img src={logo} alt="Little lemon logo in white"/>
        </form>
    )
}

export default BookingForm;