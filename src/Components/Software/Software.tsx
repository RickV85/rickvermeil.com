import { useEffect } from "react";
import { data } from "../../SoftwareData";
import SoftwareTile from "../SoftwareTile/SoftwareTile";

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
  }, [setSection])

  const tiles = data.map((tile, i) => {
    return <SoftwareTile key={i} appTitle={tile.appTitle} bgColor={tile.bgColor} font={tile.font} fontStyle={tile.fontStyle} ytLink={tile.ytLink} description={tile.description} deployedLink={tile.deployedLink} ghLink={tile.ghLink} />
  })

  return (
    <section className="h-fit flex flex-col items-center">
      {tiles}
    </section>
  );
}
