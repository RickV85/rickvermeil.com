export const data = [
  {
    appTitle: "Backcountry Bookings",
    tech: [
      "React",
      "Typescript",
      "Rails",
      "Ruby",
      "Sass",
      "CSS",
      "HTML",
      "Cypress",
      "Google Maps API",
      "AWS S3 Bucket",
      "Git",
      "GitHub",
    ],
    bgColor: "bg-[#283618]",
    titleFontStyle: "font-backcountry text-[#FBFAF5] font-bold",
    ytLink: "https://www.youtube.com/embed/4Q1fa0x7wao",
    img: "",
    descFontStyle: "font-backcountry text-[#FBFAF5] text-lg",
    description: `Welcome to Backcountry Bookings - your ultimate destination for all your camping needs! Our website is a comprehensive conglomerate of campsite information from around the country, designed to provide campers with an easy-to-navigate and reliable platform for finding the perfect campsite for their outdoor adventures.

    Awarded first place in Turing's “Demo Comp” by an panel of judges in the software industry. This application was built by a full-stack team of seven students for the group's final Capstone project at the Turing School of Software and Design.
    
    This application is designed to allow a user to research US National Park campgrounds by a variety of options including by state, park name, campground name and their current location. The user is presented with search result options which they can browse and then select one for more information or add to their favorites which will appear on the home page. On the details page for a campground, they will receive vital information about the campground that will help them plan their trip.

    The campground seeker can browse images of the selected campground, an interactive meet provided by Google Maps API, attributes of the campground and a review section that allows a user to submit their opinion of the campground as well as a photo which is stored in an Amazon S3 Bucket. Finally, the user can click links to either be navigated directly to the campground from their location or book a site on the NPS reservation system Recreation.gov.`,
    linkLogoColor: "F9A03F",
    deployedLink: "https://backcountrybookings.herokuapp.com/",
    ghLink: "https://github.com/Backcountry-Bookings/backcountry_fe",
  },
  {
    appTitle: "Ride Ready",
    tech: [
      "React",
      "JavaScript",
      "Sass",
      "CSS",
      "HTML",
      "Cypress",
      "Strava OAuth2.0 API",
      "Git",
      "GitHub",
    ],
    bgColor: "bg-[#2F4858]",
    titleFontStyle: "font-rrlogo text-[#F6AE2D]",
    ytLink: "https://www.youtube.com/embed/WvRA8F9EQsI",
    img: "",
    descFontStyle: "text-[#F6AE2D] text-lg",
    description: `This app was inspired by an idea that I had while I was rebuilding my mountain bike suspension. I realized that it was not only difficult to keep track of the last time I serviced my suspension, but it was extremely difficult to accurately determine how many hours I had ridden the bike since that date which is how suspension manufacturers prescribe their recommended service intervals.
    
    I set out to create an app that addresses this problem that is common to all mountain bikers that also meets the requirements of Turing's School of Software and Design Mod 3 (3rd quarter) final project. This project had a tight timeline of 6 days so I had to work very hard to complete this app, learning new tech like OAuth2.0 in the process.
    
    This project marks a watershed moment for me. Only a year ago, I could have never imagined I could build a complex application that solves a real world problem from design to deployment in 6 days on my own. After this project, I feel that given the time and resources, I could build absolutely anything I want to.
    
    Please note that this application requires a user to have a Strava account and use it to track mountain bike rides for it to operate correctly. For those that are not mountain bikers, please enjoy the video above and reach out to me for a demonstration.`,
    linkLogoColor: "F26419",
    deployedLink: "https://ride-ready.vercel.app/",
    ghLink: "https://github.com/RickV85/Ride-Ready",
  },
  {
    appTitle: "LavLink",
    tech: [
      "React",
      "JavaScript",
      "Redux",
      "Sass",
      "CSS",
      "HTML",
      "Cypress",
      "REST API",
      "Google Maps API",
      "Git",
      "GitHub",
    ],
    bgColor: "bg-[#31c6e0]",
    titleFontStyle: "font-lavlink text-[#034277] font-bold",
    ytLink: "",
    img: "https://user-images.githubusercontent.com/113261334/221386610-b01bd089-a587-49bf-bd4d-c2ef6916606f.gif",
    descFontStyle: "font-lavlink text-[#034277] text-lg",
    description: `Finding a bathroom in public can be tricky, but for people with particular accessibility needs, it can be a nightmare!

    LavLink allows a user to search for public restrooms in their area that meet their criteria. Users can stipulate whether they need a wheelchair accessible bathroom, a unisex bathroom, or a restroom with a changing table. This ensures that trans people, caregivers, and people with mobility equipment know exactly where they need to go when they need to go!
    
    LavLink users can use their current location to find restrooms in their immediate area, or plan ahead by entering a zip code to search. They are provided with a list of results along with a map showing each one. By clicking on a listed restroom or map marker, they are redirected to a page to view further information about the bathroom (address, map, comments, upvotes, etc.) and a way to leave the app to pull up directions to the restroom from their current location.
    
    A mobile-first design means this app is designed to work on any phone, but has a responsive design for those with larger screen needs.`,
    linkLogoColor: "f6c28b",
    deployedLink: "https://lav-link-smithkirsten.vercel.app/",
    ghLink: "https://github.com/RickV85/lav-link",
  },
  {
    appTitle: "Funky Flix",
    tech: ["React", "JavaScript", "CSS", "HTML", "Cypress", "REST API", "Git", "GitHub"],
    bgColor: "bg-[#222121]",
    titleFontStyle: "font-funkyflix text-[#f95738] font-bold",
    ytLink: "",
    img: "https://user-images.githubusercontent.com/109977562/218594737-f5ef70de-cdd0-4681-9204-b62db32136c6.gif",
    descFontStyle: "text-[#f0dfa3]",
    description: `This was a two week, partner project assigned to students in Mod 3 of the Turing School of Software & Design's Front-End Engineering bootcamp. Our goal was to create a user-friendly application that displays all the movies in our collection along with their Funky Flix rating. The purpose of our application is to assist users in determining if a movie is worth watching by providing them with information about each movie.

    Our functionality was inspired by popular movie review websites like Rotten Tomatoes, and provides a comprehensive browsing experience where users can sort how the movies are displayed or search for a particular movie by name. By clicking on a movie, users are redirected to that movie's page, which includes the movie's trailer and additional details about the movie that may be of interest to the user, such as the movie's duration and genre.

    This project served as a valuable learning opportunity for us, as it was our first project that incorporated React, Cypress testing, and a multi-page user experience using the React Router.`,
    linkLogoColor: "f95738",
    deployedLink: "https://rickv85.github.io/Funky-Flix/",
    ghLink: "https://github.com/RickV85/Funky-Flix",
  },
];
