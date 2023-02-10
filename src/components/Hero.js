import { Link } from "react-router-dom";
import hero from '../assets/chef.jpg';

const Hero = () => {
  return (
    <section className="py-32 bg-[var(--primary-green)]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-around">
          <div className="w-full lg:w-1/2 lg:pr-10">
            <h1 className="leading-tight text-white">Little Lemon</h1>
            <h2 className="mb-8 text-white">Chicago</h2>
            <p className="text-lg font-light text-white mb-8">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.   </p>
            <button><Link to="/booking">
            Reserve Table
          </Link></button>
          </div>
          <div className="w-full lg:w-1/3">
            <img src={hero} alt="Dish" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

<div className="grid pt-28 pb-10 bg-[var(--primary-green)] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-80 px-24 bg-[var(--primary-green)]">
        <div className="bg-[var(--primary-green)] text-white">
          <h1 className="">Little Lemon</h1>
          <h2 className="pb-6">Chicago</h2>
          <p className="text-xl">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="mt-8"><Link className="bg-[var(--primary-yellow)]" to="/booking">
            Reserve a Table
          </Link></button>
        </div>
        <div className="">
          <img className="max-w-md rounded shadow-2xl" src={hero} alt="hero" />
        </div>
      </div>
    </div>