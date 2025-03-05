import {render, screen} from "@testing-library/react"
import BookingForm from "../Components/BookingForm";

test("Renders static date label", () => {
    render(<BookingForm availableTimes={["1"]}/>);
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();
});