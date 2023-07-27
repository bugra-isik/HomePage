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
    name: string[];
    title: string;
    social: any;
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

  const text: string[] = ["text-yellow", "text-blue"];
  const bg: string[] = ["bg-yellow", "bg-blue"];
  const tailwind: string = "drop-shadow transition duration-300";
  const greetings: string[] = ["Merhaba!", "Hi!"];
  const header: string =
    "text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black";

  return (
    <>
      <header className="mb-[5dvw]">
        <h1 className={`${tailwind} ${header} `}>
          <span className={`${text[arr]}  transition-colors duration-300`}>
            {greetings[langArr]}
          </span>{" "}
          {about.name[langArr]}
        </h1>
        <h3 className="flex gap-10">
          {about.social.map(
            (item: string, index: number) => console.log(item),
            // <Link
            //   key={index}
            //   href={item.islink}
            //   target="_blank"
            //   className="flex"
            // >
            //   {socialIcons[index]} {item}
            // </Link>
          )}
        </h3>
      </header>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section className={`mb-[5dvw] text-justify `}>
        <div className="flex items-center justify-between">
          <h1
            className={`${text[arr]} ${tailwind} ${header} pr-5 drop-shadow-2xl`}
          >
            {about.aboutMe.header[langArr].toUpperCase()}
          </h1>
          <div className={`h-1 grow rounded-l-full ${bg[arr]} transition-colors duration-300`}></div>
        </div>
        <p
          className={`${tailwind} text-base sm:text-lg lg:text-xl 2xl:text-2xl`}
        >
          {about.aboutMe.contents[langArr]}
        </p>
      </section>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section>
        <div className="flex items-center justify-between">
          <h1 className={`${text[arr]} ${tailwind} ${header} pr-5`}>
            {about.tech.header[langArr].toUpperCase()}
          </h1>
          <div className={`h-1 grow rounded-l-full ${bg[arr]} transition-colors duration-300`}></div>
        </div>
        <section className={`${tailwind} flex flex-wrap`}>
          {about.tech.contents.map((item, index) => (
            <Link
              href={about.tech.links[index]}
              key={index}
              target="_blank"
              className="flex"
            >
              {icons[index]}
              {item}
            </Link>
          ))}
        </section>
      </section>
      {/* <Typing /> */}
    </>
  );
}

{
  /* <Link
            href={about.social.linkedIn.link}
            target="_blank"
            className="flex"
          >
            {<BsLinkedin />} {about.social.linkedIn.name}
          </Link>
          <Link
            href={about.social.linkedIn.link}
            target="_blank"
            className="flex"
          >
            {<BsGithub />}
            {about.social.linkedIn.name}
          </Link> */
}
