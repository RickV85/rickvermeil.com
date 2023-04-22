import React from "react";

interface Props {
  section: string;
  setSection: Function;
}

function Home({section, setSection}: Props) {
  return (
    <section id="homeMain">
      <section
        className="flex items-center justify-center h-[71vmin] w-screen bg-cover bg-right-top md:bg-center"
        style={{ backgroundImage: "url(/assets/Shelf-81.jpeg)" }}
      >
        <div className="w-[225px] sm:w-[330px] md:w-[400px] -translate-x-16 sm:-translate-x-36 md:-translate-x-64">
          <h3 className=" text-lg sm:text-2xl md:text-4xl font-semibold text-aqua  text-center md:leading-[60px] [text-shadow:_2px_2px_10px_#001524]">
            Frontend Developer, passionate adventurer, driven by challenge
          </h3>
        </div>
      </section>
      <section className="flex justify-center h-fit">
        <p className="text-darkBlue font-light leading-loose text-center w-[90vw] py-4">
          {`Welcome to my corner of the internet - where code meets adventure!
          I'm a frontend developer who loves to push my limits on the rock face,
          tear up the mountain bike trails, and carve my way down fresh powder
          on my snowboard. When I'm not seeking out the next adrenaline rush,
          you can find me crafting beautiful and functional web applications
          using my expertise in React and JavaScript. I believe that the same
          focus and determination required to conquer a challenging climb or
          trail translates seamlessly into the world of web development. So join
          me on this exciting journey as we scale new heights, conquer new
          challenges, and create amazing things together!`}
        </p>
      </section>
    </section>
  );
}

export default Home;
