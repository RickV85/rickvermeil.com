import React from "react";

export default function Software() {
  return (
    <section className="h-fit flex flex-col items-center">
      <section className="bg-teal w-[95vw] rounded-lg h-fit mt-3 flex flex-col items-center p-4">
        <h2 className="font-rrlogo text-4xl text-[#F6AE2D] drop-shadow-[4px_4px_5px_#00000075]">
          Ride Ready
        </h2>
        {/* VIDEO iFrame */}
        <p className="pt-2">
          {`This app was inspired by an idea that I had while I was rebuilding my
          mountain bike suspension. I realized that it was not only difficult to
          keep track of the last time I serviced my suspension, but it was
          extremely difficult to accurately determine how many hours I had
          ridden the bike since that date which is how suspension manufacturers
          prescribe their recommended service intervals.`}<br/><br/>{`I set out to create an
          app that addresses this problem that is common to all mountain bikers
          that also meets the requirements of Turing's School of Software and
          Design Mod 3 (3rd quarter) final project. This project had a very
          tight timeline of 6 days so I had to work very hard to complete this
          app, learning new tech like OAuth2.0 in the process.`}<br/><br/>{`This project
          marks a watershed moment for me. Only a year ago, I would have never
          imagined I could build a complex application that solves a real world
          problem from design to deployment in 6 days on my own. After this
          project, I feel that given the time and resources, I could build
          absolutely anything I want to.`}<br/><br/>{`Please note that this application
          requires a user to have a Strava account and use it to track mountain
          bike rides for it to operate correctly. For those that are not
          mountain bikers, please enjoy the video above and reach out to me for
          a demonstration.`}
        </p>
      </section>
    </section>
  );
}
