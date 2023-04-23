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
      <iframe className="h-[81vh] md:h-[100vh] w-screen" title="resume" src={'https://cvws.icloud-content.com/B/Af6DpWjoTDjywO_ABWJLJnxl8s1yARzUYPx-yqyd0ivEbZoLIB2FiEw2/Rick+Vermeil+Resume.pdf?o=ApA9O28eRE_nsUSVp7u_p1Xc7p1PF0_M9n8oviikqPqh&v=1&x=3&a=CAogI2RLnAXhyCaj5CFGvZArfVMen4KdygjSWSMRR41ROZASaRD_zuD4-jAY_6u8-vowIgEAUgRl8s1yWgSFiEw2aiQMA-kJ3BkaSHyivESzaoZuAAMYdUiiMY-mr6kokiQxrdYFEs5yJLW0CA51hUcB-guRgovnEZrZe7yOvTmZEJQdasyQAydGUA6PQQ&e=1682273408&fl=&r=bf836738-5ac0-471f-955c-797b571c0fe2-1&k=oGPb2KhQxTYIibDUneyXpg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=72&s=B0fF48rkyEJQx6It0OKk4XI5euo&cd=i'} />
    </section>
  )

}