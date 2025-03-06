import {render, fireEvent, waitFor, screen} from "@testing-library/react"
import BookingForm from "../Components/BookingForm";

test("Renders static date label", () => {
    render(<BookingForm availableTimes={["1"]}/>);
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();
});

describe("Validate HTML5 form validation", () => {
    test("Date input field is required", () => {
        render(<BookingForm availableTimes={["1", "2"]} dispatchAvailableTimes={(times) => times} submitForm={() => true}/>)
        const submitButton = screen.getByRole("submit")

        const dateInput = screen.getByLabelText(/Choose date/);

        fireEvent.click(submitButton);
        expect(dateInput.validity.valid).toBe(false);
    });
    test("Number of guest input field is must be less greater than or equal to one and less than or equal to 10", ()=>{
        render(<BookingForm availableTimes={["1", "2"]} dispatchAvailableTimes={(times) => times} submitForm={() => true}/>)
        const submitButton = screen.getByRole("submit")

        const numberOfGuestInput = screen.getByLabelText(/Number of guest/);

        fireEvent.change(numberOfGuestInput, {target: {value: .5}});
        fireEvent.click(submitButton);
        expect(numberOfGuestInput.validity.valid).toBe(false);

        fireEvent.change(numberOfGuestInput, {target: {value: 7}});
        fireEvent.click(submitButton);
        expect(numberOfGuestInput.validity.valid).toBe(true);

        fireEvent.change(numberOfGuestInput, {target: {value: 11}});
        fireEvent.click(submitButton);
        expect(numberOfGuestInput.validity.valid).toBe(false);
    });
})