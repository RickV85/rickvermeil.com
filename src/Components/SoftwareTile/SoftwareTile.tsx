import { NavLink } from "react-router-dom";

export interface Props {
  appTitle: string;
  bgColor: string;
  titleFontStyle?: string;
  ytLink?: string;
  descFontStyle?: string;
  description: string;
  deployedLink: string;
  ghLink: string;
  linkLogoColor: string;
}

export default function SoftwareTile({
  appTitle,
  bgColor,
  titleFontStyle,
  ytLink,
  descFontStyle,
  description,
  deployedLink,
  ghLink,
  linkLogoColor
}: Props) {
  let ytIFrame;

  if (ytLink) {
    ytIFrame = (
      <iframe
        className="w-[90vw] md:w-[87vw] max-w-[1120px] h-[30vh] md:h-[50vh] mb-2"
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
        drop-shadow-[4px_4px_5px_#00000075] mb-4 ${titleFontStyle}`}
        >
          {appTitle}
        </h2>
        {ytIFrame}
      </div>
      <div className={`w-[90vw] md:w-[87vw] max-w-[1115px] ${descFontStyle}`}>
        <p className='py-2 whitespace-pre-line'>{description}</p>
        <NavLink
          to={deployedLink}
          className="flex items-center w-fit py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://img.icons8.com/ios/50/${linkLogoColor}/domain--v1.png`}
            alt="website icon"
            className="drop-shadow-[3px_2px_2px_#00000075]"
          />
          <p className="pl-2">Deployed Application</p>
        </NavLink>
        <NavLink
          to={ghLink}
          className="flex items-center w-fit py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://img.icons8.com/material-outlined/48/${linkLogoColor}/github.png`}
            alt="GitHub icon"
            className="drop-shadow-[3px_2px_2px_#00000075]"
          />
          <p className="pl-2">GitHub Repository</p>
        </NavLink>
      </div>
    </section>
  );
}
