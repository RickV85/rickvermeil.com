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
    <section className=" flex flex-col items-center h-[82vh] sm:h-[90vh] md:h-[105vh] ">
      <iframe
        src="/assets/Rick Vermeil Resume.pdf"
        width="100%"
        height="100%"
        title="Rick Vermeil Resume 10.19.23"
      >
        Your browser does not support PDFs. Please download my resume by clicking the button below.
      </iframe>
      <button className=" h-fit w-fit bg-teal py-2 px-6 m-6 rounded-md ">
        <a href={"/assets/Rick Vermeil Resume.pdf"} download style={{ textDecoration: 'none', color: 'inherit' }}>
          Download Resume
        </a>
      </button>
    </section>
  );
}
