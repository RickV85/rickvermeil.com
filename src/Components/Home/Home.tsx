function Home() {
  return (
    <section id="homeMain">
      <section
        className="flex items-center justify-center h-[71vmin] w-screen bg-cover bg-right md:bg-center"
        style={{ backgroundImage: "url(/assets/Shelf-81.jpeg)" }}
      >
        <div className="w-[225px] sm:w-[330px] md:w-[400px] -translate-x-20 sm:-translate-x-36 md:-translate-x-64">
          <h3 className=" text-lg sm:text-2xl md:text-4xl font-semibold text-aqua  text-center md:leading-[60px] [text-shadow:_2px_2px_10px_#001524]">
            Frontend Developer, passionate adventurer, driven by challenge
          </h3>
        </div>
      </section>
      <section className="flex justify-center h-fit">
        <p className="text-darkBlue font-light leading-loose whitespace-pre-line text-center w-[90vw] py-4">
          {`Welcome! I'm a frontend developer looking for my first software development role. I love pushing my limits on a rock face, down a mountain bike trail and in software development. When I'm not pursuing one of my passions in the outdoors, you can find me crafting user-centric React applications. I believe that the same focus and determination required to conquer a challenging climb or trail translates seamlessly into the world of software development. I'd love for you to join me on this journey as we scale new heights, conquer new challenges and create amazing things together!`}
        </p>
      </section>
    </section>
  );
}

export default Home;
