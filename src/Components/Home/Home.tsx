import { useEffect, useState } from "react";
import profile from "../../assets/profile pic.webp";
import HeroImage from "../HeroImage/HeroImage";
import { useNavigate } from "react-router-dom";

function Home() {
  const heroImageUrls = ["/assets/Shelf-81.webp","/assets/DSC_0232.webp", "/assets/Cropped_Keystone_Enduro_EvenFlow.webp"];
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const heroImgTimer = setInterval(() => {
      setHeroImgIndex((heroImgIndex + 1) % heroImageUrls.length);
    }, 6000);
    return () => {
      clearInterval(heroImgTimer);
    };
  }, [heroImgIndex, heroImageUrls.length]);

  return (
    <section id="homeMain">
      <section className="relative flex items-center justify-center h-[30vh] sm:h-[44vh] md:h-[60vh] lg:h-[90vh] w-screen xl:w-[1600px] xl:m-auto">
        {heroImageUrls.map((url, i) => (
          <HeroImage
          key={i}
          imgIndex={i}
          currentImgIndex={heroImgIndex}
          imgUrl={url}
        />
        ))}
        <div className="w-[225px] sm:w-[330px] md:w-[550px] -translate-x-16 sm:-translate-x-20 md:-translate-x-36 lg:-translate-x-64">
          <h3 className=" text-[1.1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] sm:leading-[30px] md:leading-[40px] lg:leading-[60px]  font-semibold text-aqua  text-center [text-shadow:_2px_2px_5px_#000000] ">
            Frontend Developer,
            <br />
            passionate adventurer,
            <br />
            driven by challenge
          </h3>
          <div className=" w-full flex flex-col items-center p-4 ">
            <button className="w-fit lg:w-[16vw] lg:max-w-[250px] h-fit bg-teal/90 outline outline-1 outline-orange rounded-md text-aqua [text-shadow:_2px_2px_5px_#000000] text-xs sm:text-base lg:text-lg font-semibold p-2 " onClick={() => navigate("/software")}>Checkout my apps!</button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center h-fit">
        <p className="text-darkBlue font-light leading-loose whitespace-pre-line text-center w-[90vw] py-4">
          {`Hello and welcome! I love pushing my limits on a rock face, down a mountain bike trail and in software development. When I'm not pursuing one of my passions in the outdoors, you'll find me designing and brining user-centric web applications to life. I believe that the same focus and determination required to conquer a challenging climb or trail translates seamlessly into the world of software development. Join me on this journey as we take on new challenges and create amazing things together!`}
        </p>
        <div className="bg-teal h-fit w-screen flex flex-col-reverse md:flex-row items-center ">
          <img
            className="h-72 m-6 md:h-96 md:m-8 rounded-md"
            src={profile}
            alt="Rick Vermeil head shot"
          />
          <div className="text-beige whitespace-pre-line ">
            <p className="p-6 ">{`I'm a former marketing professional, with extensive experience in Project Management, Event Marketing, Web Content Management and Product Ownership, eager to transition to a Frontend Software Developer role. While my background is in marketing, I recently completed and truly enjoyed learning client-side development in the Turing School of Software and Design. This experience has given me the skills, knowledge and tenacity that I need to help me make this change.

            My expertise in modern Frontend languages and frameworks include proficiencies in React, JavaScript ES6, TypeScript, Sass, CSS3, HTML5, and testing with Cypress, Mocha/Chai and Jest but I am also always learning new tech. At the moment, I am learning Tailwind (which this website is styled with), Next.js and Node.js. UI/UX design, user-friendly error handling, responsive layouts, accessibility, Agile methodologies, and test-driven development are all important practices that I employ when creating applications.

            One of my proudest accomplishments is the creation of "Backcountry Bookings", an application that was nominated by my peers to compete in Turing's "Demo Comp" against other outstanding student projects. It was an amazing experience to see our design come to life with the help of a full-stack team and receive recognition from my peers.

            As a developer, I'm highly collaborative and methodical, and I value producing quality, readable code. My  marketing experience has given me a unique perspective on user empathy, and I'm always thinking about how to create the best possible experience for my users. I'm equally comfortable coding alone or in pairs and I find it rewarding to assist others around me.

            I'm excited about the prospect of collaborating with a team that takes a democratic approach to decision-making. My team's best interests always take precedence over my own code and I enjoy learning from others' solutions to the problem at hand. I prioritize recognizing those around me for their contributions to our team's shared success, even if those may seem insignificant to others.

            Thank you for taking the time to learn more about me, and I hope to have the opportunity to work with you soon. Please click the link below if you'd like to get in touch.`}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
