import { useState, useEffect } from "react";

const BookingForm = (props) => {
  const [availableTimes, setAvailableTimes] = useState(
    fetchAPI(new Date())
  );
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    if (!date) return;
    setAvailableTimes(fetchAPI(new Date(date)));
  }, [date]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, date, time, numberOfGuests, occasion });

    console.log("Name: ", name);
    console.log("Date: ", date);
    console.log("Time: ", time);
    console.log("numberOfGuests: ", numberOfGuests);
    console.log("Occasion: ", occasion);
  };

  return (
    <section
      className="py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1528735000313-039ec3a473b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')",
      }}
    >
      <div className="container mx-auto lg:px-80 opacity-95">
        <form
          className="flex flex-col justify-between bg-[var(--highlight-light)] p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center mb-4">Reserve a Table</h2>

          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            First and Last Name
          </label>
          <input
            className="border border-gray-400 p-2 w-full mb-4"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block text-gray-700 font-bold mb-2" htmlFor="res-date">
            Choose date
          </label>
          <input
            className="border border-gray-400 p-2 w-full mb-4"
            type="date"
            name="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label className="block text-gray-700 font-bold mb-2" htmlFor="res-time">
            Choose time
          </label>
          <select
            className="border border-gray-400 p-2 w-full mb-4"
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option></option>
            {availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>

          <label className="block text-gray-700 font-bold mb-2" htmlFor="numberOfGuests">
            Number of guests
          </label>
          <input
            className="border border-gray-400 p-2 w-full mb-4"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="numberOfGuests"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          ></input>

          <label className="block text-gray-700 font-bold mb-2" htmlFor="occasion">
            Occasion
          </label>
          <select
            className="border border-gray-400 p-2 w-full mb-4"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>

          <div className="text-center mt-4">
            <input
            disabled={!(name && date && time && numberOfGuests && occasion)}
              className="bg-[var(--primary-yellow)] text-black font-semibold rounded hover:bg-yellow-500 py-3 px-8"
              type="submit"
              value="Confirm Reservation"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};