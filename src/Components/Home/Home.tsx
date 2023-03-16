import React from "react";

function Home() {
  return (
    <section className="">
      <section
        className="flex items-center justify-center h-[71vmin] w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/Shelf-cropped.JPG)" }}
      >
        <div className="w-[225px] sm:w-[330px] md:w-[400px] -translate-x-16 sm:-translate-x-32 md:-translate-x-64">
          <h3 className=" text-xl sm:text-3xl md:text-4xl font-semibold text-aqua  text-center md:leading-[60px] [text-shadow:_2px_2px_10px_#001524]">
            Frontend Developer, passionate adventurer, driven by challenge
          </h3>
        </div>
      </section>
    </section>
  );
}

export default Home;
