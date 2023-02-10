const Testimonials = () => {
  return (
    <section className="bg-white p-10">
    <h2 className="mb-6 text-center">
      Our customers say
    </h2>
    <div className="flex flex-col md:flex-row justify-evenly sm:items-center">
      <div className="w-full max-w-sm mb-10">
        <div className="bg-[var(--highlight-light)] p-10 rounded-lg shadow-md">
          <p className="text-gray-700 text-base font-medium">
            "The food was amazing! I had the best meal of my life here."
          </p>
          <p className="text-gray-500 text-xs font-medium mt-2">
            - John Doe
          </p>
        </div>
      </div>
      <div className="w-full max-w-sm mb-10">
        <div className="bg-[var(--highlight-light)] p-10 rounded-lg shadow-md">
          <p className="text-gray-700 text-base font-medium">
            "The service was fantastic, and the atmosphere was perfect."
          </p>
          <p className="text-gray-500 text-xs font-medium mt-2">
            - Jane Doe
          </p>
        </div>
      </div>
      <div className="w-full max-w-sm mb-10">
        <div className="bg-[var(--highlight-light)] p-10 rounded-lg shadow-md">
          <p className="text-gray-700 text-base font-medium">
            "The chef is a genius! Everything was cooked to perfection."
          </p>
          <p className="text-gray-500 text-xs font-medium mt-2">
            - Bob Smith
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Testimonials;