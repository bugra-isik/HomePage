import data from "@/api/about.json";
import MainContext from "@/context/Context";
import Link from "next/link";
import { useContext } from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  const { langArr, arr } = useContext(MainContext);

  interface Header {
    header: string[];
    contents: string[];
  }
  const about: {
    social: any[];
    aboutMe: Header;
    tech: Header & { links: string[] };
  } = data;

  const github: string[] = ["text-light", "text-dark"];

  const socialIcons: React.ReactElement[] = [
    <BsLinkedin key={BsLinkedin} className="text-yellow" />,
    <BsGithub
      key={BsGithub}
      className={`${github[arr]} transition duration-300`}
    />,
  ];

  const icons: React.ReactElement[] = [
    <BiLogoHtml5 key={BiLogoHtml5} />,
    <BiLogoCss3 key={BiLogoCss3} />,
    <BiLogoTypescript key={BiLogoTypescript} />,
    <BiLogoReact key={BiLogoReact} />,
    <BiLogoTailwindCss key={BiLogoTailwindCss} />,
  ];

  const techIconText: string[] = ["text-yellow", "text-blue"];
  const techBg: string[] = ["bg-[#1c1c1c]", "bg-[#f8f8f8]"];
  const techBgHover: string[] = ["hover:bg-[#292929]", "hover:bg-[#ebebeb]"];
  const text: string[] = ["text-yellow", "text-blue"];
  const bg: string[] = ["bg-yellow", "bg-blue"];
  const header: string =
    "text-xl sm:text-xl lg:text-3xl 2xl:text-5xl font-black";

  const social = about.social.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      target="_blank"
      className={`${techBg[arr]} ${techBgHover[arr]} flex  items-center gap-[0.5dvw] rounded-xl p-1  drop-shadow-lg transition duration-300`}
    >
      {socialIcons[index]}
      {item.name}
    </Link>
  ));

  const tech = about.tech.contents.map((item, index) => (
    <Link
      href={about.tech.links[index]}
      key={index}
      target="_blank"
      className={`${techBg[arr]} ${techBgHover[arr]} flex h-32 w-32 flex-col items-center justify-center gap-[1.2dvw] rounded drop-shadow-lg transition duration-300`}
    >
      <i
        className={`${techIconText[arr]} text-5xl transition duration-300  sm:text-3xl lg:text-5xl 2xl:text-8xl`}
      >
        {icons[index]}
      </i>
      <p
        className={`${techIconText[arr]} text-base transition  duration-300 sm:text-xs lg:text-xl 2xl:text-3xl`}
      >
        {item}
      </p>
    </Link>
  ));

  return (
    <>
      <section className={`mb-[4dvw] text-justify `}>
        <header className="mb-[2dvw] flex items-center justify-between">
          <h1
            className={`${text[arr]}  ${header} select-none pr-5 drop-shadow-2xl transition duration-300`}
          >
            {about.aboutMe.header[langArr].toUpperCase()}
          </h1>
          <div
            className={`h-[0.2dvw] grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <p
          className={` pb-[1dvw] text-[6px] leading-[0.5rem] transition duration-300 sm:text-xs lg:text-base 2xl:text-2xl`}
        >
          {about.aboutMe.contents[langArr]}
        </p>
        <div
          className={`flex gap-[2dvw] text-[6px] leading-[0.5rem] sm:text-xs lg:text-base 2xl:text-2xl `}
        >
          {social}
        </div>
      </section>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section>
        <header className="mb-5 flex select-none items-center justify-between ">
          <h1
            className={`${text[arr]} ${header} select-none pr-5 transition duration-300`}
          >
            {about.tech.header[langArr].toUpperCase()}
          </h1>
          <div
            className={`h-[0.2dvw] grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <section
          id="techs"
          className={`grid grid-cols-2 sm:grid-cols-3 gap-[5dvw] justify-items-center `}
        >
          {tech}
        </section>
      </section>
    </>
  );
}
