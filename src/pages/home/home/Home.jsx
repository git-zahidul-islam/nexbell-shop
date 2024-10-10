const Home = () => {
  return (
    <div>
        {/* hero section */}
      <div className="h-72 bg-slate-700/30 w-full flex justify-center items-center">
        <h1>Hero section</h1>
      </div>

      {/* feature post */}
      <section className="md:w-[90%] w-full mx-auto my-10">
        <h1 className="text-2xl font-bold">Features</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
        </div>
      </section>

      {/* some card */}
      <section className="md:w-[90%] w-full mx-auto my-10">
        <h1 className="text-2xl font-bold">Products</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
          <div className="bg-green-300 h-40 w-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
