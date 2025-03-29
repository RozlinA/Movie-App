import backgroundImage from "../assets/movie-posters.jpg";

export const Home = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Se till att hela skärmen fylls
        }}
      >
        <div className="w-[80%] md:w-[45%] text-white flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl font-bold">
            All your favourite movies in one place.
          </h1>
          <h2 className="text-2xl md:text-3xl">
            Search, save and start watching!
          </h2>
          <div className="flex flex-col md:flex-row w-full md:bg-white md:rounded-full overflow-hidden gap-3">
            <input
              type="text"
              placeholder="Search movie..."
              className="md:flex-grow p-3 pl-5 outline-none text-black bg-white rounded-full"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded-full md:-ml-2 cursor-pointer">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
