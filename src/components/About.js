import aboutImage from "../assets/chefs-1.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[var(--primary-green)] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/5">
            <img
              src={aboutImage}
              alt="about restaurant"
              className="shadow-md"
            />
          </div>
          <div className="md:w-2/4 mt-10 md:mt-0">
            <h2 className="mb-6  text-white">About Us</h2>
            <p className="text-slate-100 text-base mb-6">
              Little Lemon, a popular Mediterranean restaurant in Chicago, was
              founded in 1995 by two Italian brothers, Adrian and Mario. The
              brothers aimed to bring authentic Mediterranean flavors and
              recipes from their hometown in Italy to the city, filling a gap in
              the local dining scene.
            </p>
            <p className="text-slate-100 text-base mb-6">
              Nearly 30 years later, Little Lemon continues to serve delicious
              and authentic dishes, with Adrian and Mario still at the helm. The
              restaurant is known for its warm atmosphere, friendly staff, and
              mouth-watering menu. A visit to Little Lemon promises a memorable
              culinary experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
