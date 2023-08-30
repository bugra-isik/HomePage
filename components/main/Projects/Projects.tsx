import MainContext from "@/context/Context";
import projectsApi from "@/db/projects.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import "./index.css";
import { FaSpinner } from "react-icons/fa";

export default function Projects() {
  const projects: any[] = projectsApi;
  const { arr, langArr } = useContext(MainContext);
  const [hidden, setHidden] = useState(false);

  const text: string[] = ["text-dark", "text-light"];
  const tags: string[] = ["text-[#424242]", "text-[#eeeeee]"];
  const bg: string[] = ["bg-yellow", "bg-blue"];

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

  const grid = projects.map((i, index) => (
    <motion.main
      key={index}
      variants={item}
      className="item flip-card h-40 w-72  font-hyperlegible sm:h-40 sm:w-60 2xl:h-40 2xl:w-96"
    >
      <section className=" flip-card-inner relative h-full w-full">
        <article
          className={`${bg[arr]} flip-card-front container absolute flex h-full w-full flex-col justify-between rounded-2xl py-2 pl-2 pr-4 text-dark drop-shadow backdrop-blur transition  duration-300 `}
        >
          <Link
            href={i.link}
            target="_blank"
            className="absolute inset-0 top-0 h-full w-full lg:hidden"
          ></Link>

          <h1
            className={`${text[arr]} title select-none text-4xl font-black transition duration-300 lg:text-3xl 2xl:text-5xl`}
          >
            {i.name[langArr]} {index + 1}
          </h1>

          <p
            className={`${text[arr]} hyphens-auto text-justify text-lg transition duration-300  lg:text-xs 2xl:text-base`}
          >
            {i.content[langArr]}
          </p>
          <ul
            className={`${tags[arr]} hover: flex cursor-cell flex-row flex-wrap gap-x-2 text-xs transition duration-300  sm:leading-3 lg:text-xs 2xl:text-base`}
          >
            {i.tag.map((item: any, index: number) => (
              <li key={index}>#{item}</li>
            ))}
          </ul>
        </article>
        <div
          className={`flip-card-back absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl ${bg[arr]} drop-shadow`}
        >
          <Link
            href={i.link}
            target="_blank"
            className="pointer-events-none sm:pointer-events-auto"
          >
            <>
              <div
                className={`z-50 animate-spin text-7xl text-dark`}
                hidden={hidden}
              >
                <FaSpinner />
              </div>

              <Image
                src={`https://drive.google.com/uc?export=view&id=${i.image}`}
                alt="There should be an image!"
                fill
                onLoad={() => setHidden(true)}
              />
            </>
          </Link>
        </div>
      </section>
    </motion.main>
  ));

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mt-10 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {grid}
      </motion.div>
    </>
  );
}
