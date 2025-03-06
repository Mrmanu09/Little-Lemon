import { useState } from "react";

import '../Css/BookingForm.css';

function BookingForm(props) {
    const [fieldData, setFieldData] = useState({
        date: "",
        "res-time": "",
        guests: "",
        occasion: ""
    })

    const [fieldErrors, setFieldErrors] = useState({
        "date-error": "",
        "res-time-error": "",
        "guests-error": "",
        "occasion-error": ""
    })

    const handleError = (name, value) => {setFieldErrors(prevErrors => ({...prevErrors, [name] : value}))}

    const isThereAnyErrors = () => {
        return !(fieldErrors['date-error'] === "" && fieldErrors['res-time-error'] === "" && fieldErrors['guest-error'] === "" && fieldErrors['occasion-error'] === "")
    }

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "date") {
            const invalidDateThresh = new Date()
            invalidDateThresh.setDate(invalidDateThresh.getDate()-2)
            if(new Date(value) < invalidDateThresh){
                handleError("date-error", "Can not book for a date that has passed");
            }
            else{
                handleError("date-error", "");
                props.dispatchAvailableTimes(value);
            }
        } else if (name == "res-time"){
            if(value === "--select--"){
                handleError("res-time-error", "Please select an option");
            } else {
                handleError("res-time-error", "");
            }
        }

        setFieldData(prevFieldData => ({...prevFieldData, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submitForm(fieldData);
    }

    return (
        <form style={{"display": "grid", "max-width": "200", "gap": "20"}} onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" value={fieldData['date']} onChange={handleChange} required className={fieldErrors['date-error'] === "" ? "no-error" : "error"}/>
            <p style={fieldErrors['date-error'] === "" ? {} : {"display": "block"}}>{fieldErrors['date-error']}</p>
            <label for="res-time">Choose time</label>
            <select id="res-time" name="res-time" value={fieldData['res-time']} onChange={handleChange}>
                <option value="--select--" key="select"></option>
                {props.availableTimes.map((time) => <option value={time} key={time}>{time}</option>)}
            </select>
            <p style={fieldErrors['res-time-error'] === "" ? {} : {"display": "block"}}>{fieldErrors['res-time-error']}</p>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={fieldData['guests']} onChange={handleChange}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={fieldData['occasion']} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" role="submit" disabled={
                !(fieldErrors['date-error'] === ""
                && fieldErrors['res-time-error'] === ""
                && fieldErrors['guests-error'] === ""
                && fieldErrors['occasion-error'] === ""
                )}/>
        </form>
    )
}

export default BookingForm;