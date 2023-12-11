import { Master } from "@/app/store";
import projects from "@/db/projects.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useStore } from "zustand";

export default function Projects() {
  const { theme, language } = useStore(Master);
  const [hidden, setHidden] = useState(false);
  const bg: string[] = ["bg-color1", "bg-colorA"];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const grid = projects.map((e, index) => (
    <motion.main
      key={index}
      variants={item}
      className="item flip-card h-40 font-hyperlegible  sm:h-40 2xl:h-60"
    >
      <section className="flip-card-inner relative h-full w-full ">
        <article
          className={`${bg[theme]} flip-card-front container absolute flex h-full w-full flex-col justify-between  rounded px-4 pb-2 pt-3 text-dark1 drop-shadow backdrop-blur transition duration-300 sm:pt-4 md:pt-5 lg:pt-3 xl:pt-4 2xl:pt-5`}
        >
          <Link
            href={e.link}
            target="_blank"
            className={`absolute inset-0 top-0 h-full w-full lg:hidden`}
          ></Link>

          <h1
            className={`${
              theme ? "text-light1" : "text-dark1"
            } title select-none text-4xl font-black transition duration-300 lg:text-3xl 2xl:text-5xl`}
          >
            {e.name[language]} {index + 1}
          </h1>

          <p
            className={`${
              theme ? "text-light1" : "text-dark1"
            } text-justify text-sm transition duration-300 after:hyphens-auto sm:text-base md:text-xl lg:text-sm xl:text-lg 2xl:text-2xl`}
          >
            {e.content[language]}
          </p>
          <ul
            className={`${
              theme ? "text-light1/75" : "text-dark1/75"
            } hover: flex cursor-cell flex-row flex-wrap gap-x-2 text-xs transition duration-300  sm:leading-3 lg:text-xs 2xl:text-base`}
          >
            {e.tag.map((item: any, index: number) => (
              <li key={index}>#{item}</li>
            ))}
          </ul>
        </article>
        <div
          className={`flip-card-back absolute flex h-full w-full items-center justify-center overflow-hidden ${bg[theme]} drop-shadow-2xl`}
        >
          <Link
            href={e.link}
            target="_blank"
            className="pointer-events-none sm:pointer-events-auto "
          >
            <>
              <div
                className={`z-50 animate-spin text-7xl text-dark1  `}
                hidden={hidden}
              >
                <FaSpinner />
              </div>

              <Image
                src={`/projects/${e.image}.png`}
                alt="Image!"
                fill
                onLoad={() => setHidden(true)}
                className={`object-cover`}
              />
            </>
          </Link>
        </div>
      </section>
    </motion.main>
  ));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {grid}
    </motion.div>
  );
}
