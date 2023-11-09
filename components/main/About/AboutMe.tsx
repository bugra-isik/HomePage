import about from "@/db/about.json";
import { Line, TextHeading } from "../About";

export default function AboutMe({ theme, language }) {
  return (
    <section
      className={`mb-6 text-justify sm:mb-8 md:mb-10 lg:mb-6 xl:mb-8 2xl:mb-10`}
    >
      <header className="mb-3 flex items-center justify-between gap-x-2 sm:mb-4 md:mb-5 lg:mb-3 xl:mb-4 2xl:mb-5">
        <TextHeading theme={theme}>
          {about.aboutMe.header[language]}
        </TextHeading>
        <Line theme={theme} />
      </header>
      <p
        className={`${
          theme ? "text-dark1" : "text-light1"
        } hyphens-auto text-sm transition duration-300 sm:text-lg md:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl`}
      >
        <span>{about.aboutMe.contents[language]}</span> <span>&#x1F44B;</span>
      </p>
    </section>
  );
}
