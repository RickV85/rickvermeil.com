import React from "react";

function Home() {
  return (
    <section className="">
      <section className="flex items-center justify-center h-[71vmin] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/Shelf-cropped.JPG)" }}>
        <div className="w-[400px]">
          <h3 className="text-4xl font-semibold text-aqua -translate-x-64 text-center leading-[60px] [text-shadow:_2px_2px_10px_#001524]">
            Frontend Developer, passionate adventurer, driven by challenge
          </h3>
        </div>
      </section>
    </section>
  );
}

export default Home;
