import { Link, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConfirmationPage() {
  const search = useLocation().search;
  const params = new URLSearchParams(search);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center py-56 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      }}>
      <div className="bg-white rounded-lg p-8 shadow-lg opacity-95">
        <h1 className="text-center mb-4">Reservation Confirmed!</h1>
        <p className="text-lg mb-8">
          Thank you for your reservation at Little Lemon. Enjoy your dinner!
        </p>
        <table className="flex justify-center mb-6">
          <tbody>
            <tr>
              <td className="font-semibold">Name:</td>
              <td>{params.get("name")}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-4">Date:</td>
              <td>{params.get("date")}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-4">Time:</td>
              <td>{params.get("time")}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-4">Guests:</td>
              <td>{params.get("numberOfGuests")}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-4">Occasion:</td>
              <td>{params.get("occasion")}</td>
            </tr>
          </tbody>
        </table>
       <div className="flex justify-evenly py-4">
         <button>
          <Link to="/booking">Back</Link>
        </button>
        <button>
          <Link to="/">Home</Link>
        </button>
       </div>
       </div>
      </div>
      <Footer />
    </div>
  );
}
