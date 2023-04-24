import { useEffect } from "react";

interface Props {
  setSection: Function;
}

export default function Resume({ setSection }: Props) {
  useEffect(() => {
    setSection("resume");

    return () => {
      setSection("/");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <iframe
        className="h-[81vh] md:h-[100vh] w-screen"
        title="resume"
        src={
          "https://docs.google.com/document/d/1ZF0BCMgEvImzQhZcKlD6YKUcPZUZoHBN/edit?usp=sharing&ouid=101000928729222042760&rtpof=true&sd=true"
        }
      />
    </section>
  );
}
