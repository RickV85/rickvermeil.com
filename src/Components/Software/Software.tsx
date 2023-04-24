import { useEffect } from "react";
import { data } from "../../SoftwareData";
import SoftwareTile from "../SoftwareTile/SoftwareTile";

interface Props {
  setSection: Function;
}

export default function Software({ setSection }: Props) {
  useEffect(() => {
    setSection("software");

    return () => {
      setSection("/");
    };
  }, [setSection]);

  const tiles = data.map((tile, i) => {
    return (
      <SoftwareTile
        key={i}
        appTitle={tile.appTitle}
        bgColor={tile.bgColor}
        titleFontStyle={tile.titleFontStyle}
        ytLink={tile.ytLink}
        descFontStyle={tile.descFontStyle}
        description={tile.description}
        deployedLink={tile.deployedLink}
        ghLink={tile.ghLink}
        linkLogoColor={tile.linkLogoColor}
      />
    );
  });

  return (
    <section className="h-fit flex flex-col items-center pb-4">{tiles}</section>
  );
}
