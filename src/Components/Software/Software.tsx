import { useEffect } from "react";
import { NavLink} from "react-router-dom";

interface Props {
  section: string;
  setSection: Function;
}

export default function Software({section, setSection}: Props) {

  useEffect(() => {
    setSection('software')

    return () => {
      setSection('/')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <section className="h-fit flex flex-col items-center">
      <section className="bg-teal w-[95vw] max-w-[1200px] rounded-lg h-fit mt-3 p-4 my-8">
        <div className="flex flex-col items-center">
          <h2 className="font-rrlogo text-5xl text-[#F6AE2D] drop-shadow-[4px_4px_5px_#00000075]">
            Ride Ready
          </h2>
          <iframe
            className="w-[95vw] max-w-[1000px] px-4 my-6 h-[50vh]"
            src="https://www.youtube.com/embed/WvRA8F9EQsI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <p className="py-2 text-beige">
            {`This app was inspired by an idea that I had while I was rebuilding my
            mountain bike suspension. I realized that it was not only difficult to
            keep track of the last time I serviced my suspension, but it was
            extremely difficult to accurately determine how many hours I had
            ridden the bike since that date which is how suspension manufacturers
            prescribe their recommended service intervals.`}
            <br />
            <br />
            {`I set out to create an
            app that addresses this problem that is common to all mountain bikers
            that also meets the requirements of Turing's School of Software and
            Design Mod 3 (3rd quarter) final project. This project had a
            tight timeline of 6 days so I had to work very hard to complete this
            app, learning new tech like OAuth2.0 in the process.`}
            <br />
            <br />
            {`This project
            marks a watershed moment for me. Only a year ago, I would have never
            imagined I could build a complex application that solves a real world
            problem from design to deployment in 6 days on my own. After this
            project, I feel that given the time and resources, I could build
            absolutely anything I want to.`}
            <br />
            <br />
            {`Please note that this application
            requires a user to have a Strava account and use it to track mountain
            bike rides for it to operate correctly. For those that are not
            mountain bikers, please enjoy the video above and reach out to me for
            a demonstration.`}
          </p>
        </div>
        <NavLink to={"https://ride-ready.vercel.app/"} className="flex items-center w-fit py-2" target="_blank" rel="noopener noreferrer" >
        <img src="https://img.icons8.com/ios/50/34F6F2/domain--v1.png" alt="website icon"/>
          <p className="text-beige pl-2">Deployed Link</p>
        </NavLink>
        <NavLink to={"https://github.com/RickV85/Ride-Ready"} className="flex items-center w-fit py-2" target="_blank" rel="noopener noreferrer" >
          <img src="https://img.icons8.com/material-outlined/48/34F6F2/github.png" alt="GitHub icon"/>
          <p className="text-beige pl-2">GitHub Repository</p>
        </NavLink>
      </section>
    </section>
  );
}
