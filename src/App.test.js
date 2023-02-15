import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders the form", () => {
  render(<BookingForm />);
  const heading = screen.getByText("Reserve a Table");
  expect(heading).toBeInTheDocument();
  const date = screen.getByLabelText("Choose date");
  expect(date).toBeInTheDocument();
  const time = screen.getByLabelText("Choose time");
  expect(time).toBeInTheDocument();
  const guests = screen.getByLabelText("Number of guests");
  expect(guests).toBeInTheDocument();
});
