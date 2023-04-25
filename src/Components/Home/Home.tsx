import profile from '../../assets/profile pic.jpeg'

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
      <section className="flex flex-col items-center h-fit">
        <p className="text-darkBlue font-light leading-loose whitespace-pre-line text-center w-[90vw] py-4">
          {`Hello and welcome to my site! I love pushing my limits on a rock face, down a mountain bike trail and in software development. When I'm not pursuing one of my passions in the outdoors, you'll find me designing and brining user-centric web applications to life. I believe that the same focus and determination required to conquer a challenging climb or trail translates seamlessly into the world of software development. I'd love for you to join me on this journey as we scale new heights, conquer new challenges and create amazing things together!`}
        </p>
        <div className="bg-teal h-fit w-screen flex flex-col-reverse md:flex-row items-center ">
          <img className='h-72 m-6 md:h-96 md:m-8 rounded-md' src={profile} alt="Rick Vermeil profile" />
          <div className='text-beige whitespace-pre-line '>
            <p className='p-6 '>{`I'm Rick Vermeil, a former Content Manager and Product Owner eager to transition in to a Front-end Software Developer role. While I've worked primarily in marketing, I recently completed the Front-end Development Program at the Turing School of Software and Design, which has given me the skills, knowledge and tenacity I need to start my career as a developer.

            My expertise in modern Front-end languages and frameworks include proficiencies in React, JavaScript ES6, TypeScript, Sass, CSS3, HTML5, and testing with Cypress and Mocha/Chai but I am also always learning new tech. At the moment, I am learning Tailwind (which this website is styled with), Next.js and Node.js. UI/UX design, user-friendly error handling, responsive layouts, accessibility, Agile methodologies, and test-driven development are all important practices that I employ when creating applications.

            One of my proudest accomplishments is the creation of "Backcountry Bookings", an application that was nominated by my peers to compete in Turing's "Demo Comp" against other outstanding student projects. It was an amazing experience to see our design come to life with the help of a full-stack team and receive recognition from my peers.

            As a developer, I'm highly collaborative and methodical, and I value producing quality, readable code. My background in marketing has given me a unique perspective on user empathy, and I'm always thinking about how to create the best possible experience for my users. I'm equally comfortable working alone or in pairs, and I'm always eager to assist other developers.

            I'm excited about the prospect of collaborating with a team of like-minded professionals who take a democratic approach to decision-making. At my core, I value accountability and always recognize those around me for their contributions. I'm committed to continuing to develop my skill set, growing in my new career as a front-end software developer.

            Thank you for taking the time to learn more about me, and I hope to have the opportunity to work with you soon. Please click the link below if you'd like to get in touch.`}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
