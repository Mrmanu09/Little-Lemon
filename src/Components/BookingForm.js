import { useState } from "react";

function BookingForm(props) {
    const [fieldData, setFieldData] = useState({
        date: "",
        "res-time": "",
        guests: "",
        occasion: ""
    })

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "date") {props.dispatchAvailableTimes(value)}

        setFieldData(prevFieldData => ({...prevFieldData, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submitForm(fieldData);
    }

    return (
        <form style={{"display": "grid", "max-width": "200", "gap": "20"}} onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" value={fieldData['date']} onChange={handleChange}/>
            <label for="res-time">Choose time</label>
            <select id="res-time" name="res-time" onChange={handleChange}>
                {props.availableTimes.map((time) => <option>{time}</option>)}
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" onChange={handleChange}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm;