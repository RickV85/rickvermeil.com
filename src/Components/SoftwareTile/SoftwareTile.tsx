import { NavLink } from "react-router-dom";

export interface Props {
  appTitle: string;
  bgColor: string;
  font?: string;
  fontStyle?: string;
  ytLink: string;
  description: string;
  deployedLink: string;
  ghLink: string;
}

export default function SoftwareTile({
  appTitle,
  bgColor,
  font,
  fontStyle,
  ytLink,
  description,
  deployedLink,
  ghLink,
}: Props) {

  return (
    <section
      className={`${bgColor} w-[95vw] flex flex-col items-center max-w-[1200px] rounded-lg h-fit mt-3 p-4 my-8`}
    >
      <div className="flex flex-col items-center">
        <h2 className={`${font} text-5xl ${fontStyle}`}>{appTitle}</h2>
        <iframe
          className="w-[73vw] px-4 my-6 h-[50vh]"
          src={ytLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
      <div className="w-[71vw]">
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
          />
          <p className="text-beige pl-2">Deployed Link</p>
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
          />
          <p className="text-beige pl-2">GitHub Repository</p>
        </NavLink>
      </div>
    </section>
  );
}
