import salad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/restauranfood.jpg";
import dessert from "../assets/lemon-dessert.jpeg";

const Specials = () => {
  const specialsData = [
    {
      name: "Greek Salad",
      description: "Classic Greek Salad, featuring tomatoes, cucumbers, red onions, olives, feta cheese, and dressed with a red wine vinaigrette.",
      img: salad,
      price: "$8.99",
    },
    {
      name: "Bruschetta",
      description: "Crispy toasted bread topped with tomatoes, fresh basil, and mozzarella cheese, drizzled with a balsamic glaze.",
      img: bruschetta,
      price: "$9.99",
    },
    {
      name: "Lemon Dessert",
      description: "Moist and tangy lemon cake, topped with a zesty lemon frosting for a burst of flavor in every bite.",
      img: dessert,
      price: "$6.99",
    },
  ];

  return (
    <div id="specials" className="mx-auto w-full bg-[var(--highlight-light)] pb-8">
      <h2 className="text-center pt-8">Specials</h2>
      <div className="h-1/2 w-screen py-6 flex items-center justify-center flex-wrap gap-16">
      {specialsData.map((data, dataItem) => (
        <div class="max-w-sm bg-white border rounded-lg shadow" key={dataItem}>
          <img class="w-full h-full rounded-t-lg object-cover" src={data.img} alt="specials" />
          <div class="p-5">
            <h1 class="mb-2 text-3xl font-bold tracking-tight text-gray-900">
              {data.name}
            </h1>
            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
              {data.price}
            </h5>
            <p class="mb-3 font-normal text-gray-700">
              {data.description}
            </p>
            <button class="px-16">
              Order
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default Specials;
