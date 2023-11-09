import about from "@/db/about.json";
import Link from "next/link";
import { Line, TextHeading } from "../About";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

export default function Techs({ theme, language }) {
  const icons: React.ReactElement[] = [
    <BiLogoHtml5 key={BiLogoHtml5} />,
    <BiLogoCss3 key={BiLogoCss3} />,
    <BiLogoTailwindCss key={BiLogoTailwindCss} />,
    <BiLogoTypescript key={BiLogoTypescript} />,
    <BiLogoReact key={BiLogoReact} />,
    <TbBrandNextjs key={TbBrandNextjs} />,
  ];
  const techMap = about.tech.contents.map((item, index) => (
    <Link
      href={about.tech.links[index]}
      key={index}
      target="_blank"
      className={`${
        theme
          ? "bg-light2 hover:bg-light2/50 text-colorA hover:text-colorB"
          : "bg-dark2 hover:bg-dark2/50 text-color1 hover:text-color2"
      } flex h-44 w-full flex-col items-center justify-center gap-5 rounded-3xl drop-shadow-lg transition duration-300 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-44 lg:w-44 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60`}
    >
      <span
        className={`text-6xl transition duration-300 sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}
      >
        {icons[index]}
      </span>
      <p
        className={`text-lg transition duration-300 sm:text-2xl md:text-3xl lg:text-lg xl:text-2xl 2xl:text-3xl`}
      >
        {item}
      </p>
    </Link>
  ));
  return (
    <section className={`mb-6 sm:mb-8 md:mb-10 lg:mb-6 xl:mb-8 2xl:mb-10`}>
      <header className="mb-3 flex select-none flex-row-reverse items-center justify-between gap-x-2 sm:mb-4 md:mb-5 lg:mb-3 xl:mb-4 2xl:mb-5">
        <TextHeading theme={theme}>{about.tech.header[language]}</TextHeading>
        <Line theme={theme} />
      </header>
      <section
        id="techs"
        className={`mt-3 grid grid-cols-1 justify-items-center gap-y-6 sm:grid-cols-2 sm:gap-y-12 lg:mt-5 lg:grid-cols-3 lg:gap-y-20 2xl:mt-8 2xl:gap-y-32`}
      >
        {techMap}
      </section>
    </section>
  );
}
