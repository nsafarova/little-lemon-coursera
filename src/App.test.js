import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe('BookingForm', () => {
test('submitting the form calls the onSubmit prop with the correct values', () => {
  const onSubmit = jest.fn();
  render(<BookingForm onSubmit={onSubmit} />);

  const nameInput = screen.getByLabelText('Name');
  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const numberOfGuestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const submitButton = screen.getByText('Confirm Reservation');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(dateInput, { target: { value: '2023-03-01' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(numberOfGuestsInput, { target: { value: '3' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    date: '2023-03-01',
    time: '17:00',
    numberOfGuests: '3',
    occasion: 'Birthday',
  });
});
});