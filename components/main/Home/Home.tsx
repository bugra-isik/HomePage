import data from "@/api/about.json";
import MainContext from "@/context/Context";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
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
    footer: { header: string[]; name: string };
  } = data;

  const socialTextColor: string[] = ["text-yellow", "text-blue"];

  const socialIcons: React.ReactElement[] = [
    <BsLinkedin
      key={BsLinkedin}
      className={`${socialTextColor[arr]} transition duration-300`}
    />,
    <BsGithub
      key={BsGithub}
      className={`${socialTextColor[arr]} transition duration-300`}
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
    "text-3xl sm:text-3xl lg:text-3xl 2xl:text-5xl font-black";

  const tech = about.tech.contents.map((item, index) => (
    <Link
      href={about.tech.links[index]}
      key={index}
      target="_blank"
      className={`${techBg[arr]} ${techBgHover[arr]} flex h-32 w-32 flex-col items-center justify-center 
      gap-[1.2dvw] rounded-3xl drop-shadow-lg transition duration-300 sm:h-40 sm:w-40 2xl:h-60 2xl:w-60`}
    >
      <i
        className={`${techIconText[arr]} text-5xl transition duration-300  sm:text-6xl lg:text-5xl 2xl:text-8xl`}
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

  const social = about.social.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      target="_blank"
      className={`${techBg[arr]} ${techBgHover[arr]} flex w-fit items-center gap-1 rounded-xl p-1 text-base drop-shadow-lg transition duration-300`}
    >
      {socialIcons[index]}
      {item.name}
    </Link>
  ));

  return (
    <>
      <section className={`text-justify `}>
        <header className=" flex items-center justify-between">
          <h1
            className={`${text[arr]}  ${header} select-none pr-5 drop-shadow-2xl transition duration-300`}
          >
            {about.aboutMe.header[langArr].toUpperCase()}
          </h1>
          <div
            className={`h-0.5 grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <p
          className={`hyphens-auto text-lg transition duration-300 mt-3 sm:text-xs lg:mt-5 lg:text-base 2xl:mt-8 2xl:text-2xl`}
        >
          {about.aboutMe.contents[langArr]}
        </p>
      </section>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section>
        <header className="flex select-none items-center justify-between mt-3 lg:mt-5 2xl:mt-8 ">
          <h1
            className={`${text[arr]} ${header}  select-none pr-5 transition duration-300`}
          >
            {about.tech.header[langArr].toUpperCase()}
          </h1>
          <div
            className={`h-0.5 grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <section
          id="techs"
          className={`grid grid-cols-2 gap-y-6 justify-items-center mt-3 sm:gap-y-12 lg:mt-5 lg:grid-cols-3 lg:gap-y-20 2xl:mt-8 2xl:gap-y-32`}
        >
          {tech}
        </section>
      </section>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section className="mt-3 sm:pb-3 lg:mt-5 lg:pb-5 2xl:mt-8 2xl:pb-8">
        <header className="mb-5 flex select-none items-center justify-between ">
          <h1
            className={`${text[arr]} ${header} select-none pr-5 transition duration-300`}
          >
            {about.footer.header[langArr]}
          </h1>
          <div
            className={`h-0.5 grow rounded-l-full ${bg[arr]} transition-colors duration-300`}
          ></div>
        </header>
        <div className={`flex flex-wrap gap-5 pb-3 sm:mt-3 lg:mt-5 2xl:mt-8`}>
          <div className="flex gap-5 ">{social}</div>
          <div
            className={`${techBg[arr]} ${techBgHover[arr]} flex w-fit select-all items-center gap-1 rounded-xl p-1 text-base  drop-shadow-lg 
            transition duration-300`}
          >
            <AiOutlineMail
              className={`${socialTextColor[arr]} transition duration-300`}
            />

            <div>{about.footer.name}</div>
          </div>
        </div>
      </section>
    </>
  );
}
