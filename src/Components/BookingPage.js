import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} dispatchAvailableTimes={props.dispatchAvailableTimes} submitForm={props.submitForm}/>
        </>
    )
}

export default BookingPage;