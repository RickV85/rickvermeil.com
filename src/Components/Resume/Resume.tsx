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
      
    </section>
  )

}