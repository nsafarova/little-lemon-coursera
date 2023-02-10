const Booking = () => {
  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528735000313-039ec3a473b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')", }}>
      <div className="container mx-auto lg:px-80">
        <form className="flex flex-col justify-between bg-[var(--highlight-light)] p-8 rounded-lg shadow-lg mt-2">
        <h2 className="text-center mb-4">Reserve a Table</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              placeholder="Type your name and surname"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              placeholder="example@mail.com"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="res-date"
            >
              Choose date
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="date"
              id="date"
              name="date"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="res-time"
            >
              Choose time
            </label>
            <select
              className="border border-gray-400 p-2 w-full"
              id="res-time "
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="guests">
              Number of guests
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="number"
              placeholder="1"
              min="1"
              max="20"
              id="guests"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="occasion"
            >
              Occasion
            </label>
            <select className="border border-gray-400 p-2 w-full" id="occasion">
              <option>Meeting</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>
          </div>

          <div className="text-center">
            <button className="bg-[var(--primary-yellow)] text-black rounded hover:bg-yellow-500 py-3 px-8" type="submit">Reserve</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Booking;
