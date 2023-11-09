import about from "@/db/about.json";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Line, TextHeading } from "./about";

export default function Social({ theme, language }) {
  const SocialLink = ({ href, children }) => (
    <Link
      className={`${
        theme ? "bg-light2" : "bg-dark2"
      } flex w-fit select-all items-center gap-2 rounded-xl p-1 px-2 text-sm drop-shadow-2xl transition duration-300 sm:text-lg md:text-2xl lg:text-sm xl:text-lg  2xl:text-2xl`}
      target="_blank"
      href={href}
    >
      {children}
    </Link>
  );

  return (
    <section className="mt-3 sm:pb-3 lg:mt-5 lg:pb-5 2xl:mt-8 2xl:pb-8">
      <header className="mt-3 flex select-none flex-row items-center justify-between gap-x-2 lg:mt-5 2xl:mt-8">
        <TextHeading theme={theme}>{about.social.header[language]}</TextHeading>
        <Line theme={theme} />
      </header>
      <ul className={`flex flex-wrap gap-5 pb-3 sm:mt-3 lg:mt-5 2xl:mt-8 `}>
        <SocialLink href={about.social.linkedin.link}>
          <BsLinkedin />
          {about.social.linkedin.name}
        </SocialLink>
        <SocialLink href={about.social.github.link}>
          <BsGithub />
          {about.social.github.name}
        </SocialLink>
        <SocialLink href={`mailto:${about.social.mail}`}>
          <AiOutlineMail />
          {about.social.mail}
        </SocialLink>
      </ul>
    </section>
  );
}
