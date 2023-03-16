import React from "react";

function Nav() {

  return (
    <nav className="bg-darkBlue w-screen h-18 md:h-24 flex justify-between py-2.5">
      <section className="flex">
        <section className="flex flex-col justify-center md:flex-row items-center p-2 ml-3">
          <img className="w-8 hidden md:flex md:w-12" src="https://img.icons8.com/ios-glyphs/100/15616D/react.png" alt="JavaScript icon" />
          <h2 className="text-beige text-sm md:text-base md:ml-2">Software</h2>
        </section>
        <section className="flex flex-col justify-center md:flex-row items-center p-2 ml-3">
          <img className="w-8 hidden md:flex md:w-12" src="https://img.icons8.com/15616D/dotty/100/null/parse-from-clipboard.png" alt="resume icon" />
          <h2 className="text-beige text-sm md:text-base md:ml-2">Resume</h2>
        </section>
        <section className="flex flex-col justify-center md:flex-row items-center p-2 ml-3">
          <img className="w-8 hidden md:flex md:w-11" src="https://img.icons8.com/15616D/ios/100/null/play-button-circled--v1.png" alt="play button" />
          <h2 className="text-beige text-sm md:text-base md:ml-2">Videos</h2>
        </section>
      </section>
      <section className="flex items-center">
        <div>
          <h1 className="text-orange text-center text-base md:text-4xl font-light">Rick Vermeil</h1>
        </div>
        <img className="h-5 mx-[2px] md:h-12 md:mx-3" src="https://img.icons8.com/15616D/ios/100/null/climbing-anchor.png" alt="climbing anchor icon" />
      </section>
    </nav>
  )
}

export default Nav;