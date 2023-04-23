import { useEffect } from "react";

interface Props {
  section: string;
  setSection: Function;
}

export default function Resume({section, setSection}: Props) {

  useEffect(() => {
    setSection('resume')

    return () => {
      setSection('/')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <section>
      <iframe className="h-[81vh] md:h-[100vh] w-screen" title="resume" src={'https://docs.google.com/document/d/1JpoXZB_NuWK4_PNt6BpWsSTN8Qa3XJu9tk0dLGC6bDk/edit?usp=sharing'} />
    </section>
  )

}