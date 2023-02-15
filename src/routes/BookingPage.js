import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const BookingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <BookingForm
        onSubmit={({ name, date, time, numberOfGuests, occasion }) => {
          const succeeded = submitAPI({ name, date, time, numberOfGuests, occasion });
          if (succeeded) {
            navigate({
              pathname: "/confirmation",
              search: `?name=${name}&date=${date}&time=${time}&numberOfGuests=${numberOfGuests}&occasion=${occasion}`,
            });
          } else {
            window.alert("Please try again.");
          }
        }}
      />
      <Footer />
    </>
  );
};
export default BookingPage;

const submitAPI = function (formData) {
  return true;
};
