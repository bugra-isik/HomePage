import data from "@/api/about.json";
import MainContext from "@/context/Context";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useContext } from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoReact,
} from "react-icons/bi";
import Typing from "./Typing";

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

  const socialIcons: React.ReactElement[] = [
    <BsLinkedin key={BsLinkedin} />,
    <BsGithub key={BsGithub} />,
  ];

  const icons: React.ReactElement[] = [
    <BiLogoHtml5 key={BiLogoHtml5} />,
    <BiLogoCss3 key={BiLogoCss3} />,
    <BiLogoTypescript key={BiLogoTypescript} />,
    <BiLogoReact key={BiLogoReact} />,
    <BiLogoTailwindCss key={BiLogoTailwindCss} />,
  ];

  const textColor: string[] = [
    "text-[#e06e3c]",
    "text-[#3963e9]",
    "text-[#3178c6]",
    "text-[#149eca]",
    "text-[#38bdf8]",
  ];
  const iconColor: string[] = [
    "text-[#e06e3c]",
    "text-[#3963e9]",
    "text-[#3178c6]",
    "text-[#149eca]",
    "text-[#38bdf8]",
  ];
  const techBg: string[] = ["bg-[#1c1c1c]", "bg-[#f8f8f8]"];
  const techBgHover: string[] = ["hover:bg-[#292929]", "hover:bg-[#ebebeb]"];
  const text: string[] = ["text-yellow", "text-blue"];
  const bg: string[] = ["bg-yellow", "bg-blue"];
  const tailwind: string = "drop-shadow transition duration-300";
  const header: string =
    "text-xs sm:text-xl lg:text-3xl 2xl:text-5xl font-black";

  const social = about.social.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      target="_blank"
      className={`${techBg[arr]} ${techBgHover[arr]} flex items-center gap-[0.5dvw] p-[0.5dvw] rounded-xl`}
    >
      {socialIcons[index]}
      {item.name}
    </Link>
  ));

  return (
    <>
      <section className={`mb-[4dvw] text-justify `}>
        <header className="mb-[2dvw] flex items-center justify-between">
          <h1
            className={`${text[arr]} ${tailwind} ${header} select-none pr-5 drop-shadow-2xl`}
          >
            {about.aboutMe.header[langArr].toUpperCase()}
          </h1>
          <div
            className={`h-[0.2dvw] grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <p
          className={`${tailwind} text-[6px] leading-[0.5rem] sm:text-xs lg:text-base 2xl:text-2xl pb-[1dvw]`}
        >
          {about.aboutMe.contents[langArr]}
        </p>
        <div className={`flex gap-[2dvw] text-[6px] leading-[0.5rem] sm:text-xs lg:text-base 2xl:text-2xl`}>{social}</div>
      </section>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section>
        <header className="mb-[2dvw] flex items-center justify-between">
          <h1 className={`${text[arr]} ${tailwind} ${header} select-none pr-5`}>
            {about.tech.header[langArr].toUpperCase()}
          </h1>
          <div
            className={`h-[0.2dvw] grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <section
          id="techs"
          className={`${tailwind} container flex grow select-none items-center justify-between `}
        >
          {about.tech.contents.map((item, index) => (
            <Link
              href={about.tech.links[index]}
              key={index}
              target="_blank"
              className={`${techBg[arr]} ${techBgHover[arr]} rounded-xl container flex h-[10dvw] w-[10dvw] flex-col items-center justify-center gap-[1.2dvw] transition duration-300`}
            >
              <i
                className={`${iconColor[index]} text-lg sm:text-3xl lg:text-5xl  2xl:text-8xl`}
              >
                {icons[index]}
              </i>
              <p
                className={`${textColor[index]} text-[7,5px] sm:text-xs  lg:text-xl 2xl:text-3xl `}
              >
                {item}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
}
