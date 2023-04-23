import { NavLink } from "react-router-dom";

export interface Props {
  appTitle: string;
  bgColor: string;
  fontStyle?: string;
  ytLink?: string;
  description: string;
  deployedLink: string;
  ghLink: string;
}

export default function SoftwareTile({
  appTitle,
  bgColor,
  fontStyle,
  ytLink,
  description,
  deployedLink,
  ghLink,
}: Props) {
  let ytIFrame;

  if (ytLink) {
    ytIFrame = (
      <iframe
        className="w-[95vw] md:w-[90vw] max-w-[1150px] px-4 h-[30vh] md:h-[50vh]"
        src={ytLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    );
  }

  return (
    <section
      className={`${bgColor} w-[95vw] flex flex-col items-center max-w-[1200px] rounded-lg h-fit p-4 mt-4`}
    >
      <div className="flex flex-col items-center">
        <h2
          className={`text-5xl text-center
        drop-shadow-[4px_4px_5px_#00000075] mb-4 ${fontStyle}`}
        >
          {appTitle}
        </h2>
        {ytIFrame}
      </div>
      <div className="w-[90vw] md:w-[87vw] max-w-[1115px]">
        <p className="py-2 text-beige whitespace-pre-line">{description}</p>
        <NavLink
          to={deployedLink}
          className="flex items-center w-fit py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios/50/34F6F2/domain--v1.png"
            alt="website icon"
            className="drop-shadow-[3px_2px_2px_#00000075]"
          />
          <p className="text-beige pl-2">Deployed Application</p>
        </NavLink>
        <NavLink
          to={ghLink}
          className="flex items-center w-fit py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/material-outlined/48/34F6F2/github.png"
            alt="GitHub icon"
            className="drop-shadow-[3px_2px_2px_#00000075]"
          />
          <p className="text-beige pl-2">GitHub Repository</p>
        </NavLink>
      </div>
    </section>
  );
}
