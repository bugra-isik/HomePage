import MainContext from "@/context/Context";
import { useContext, useCallback, useState } from "react";
import Link from "next/link";
import "./index.css";
import Image from "next/image";
import projectsApi from "@/api/projects.json";

export default function Projects() {
  const projects: any[] = projectsApi;
  const { arr, langArr } = useContext(MainContext);

  const text: string[] = ["text-dark", "text-light"];
  const tags: string[] = ["text-[#424242]", "text-[#eeeeee]"];
  const bg: string[] = ["bg-yellow", "bg-blue"];

  const grid = projects.map((item, index) => (
    <main
      key={index}
      className="flip-card h-40  bg-transparent font-hyperlegible "
    >
      <section className=" flip-card-inner relative h-full w-full">
        <article
          className={`${bg[arr]} flip-card-front container absolute flex h-full w-full flex-col justify-between rounded-2xl p-[1dvw] text-dark drop-shadow backdrop-blur transition  duration-300 `}
        >
          <h1
            className={`${text[arr]} title text-xs font-black transition duration-300 sm:text-xl lg:text-3xl 2xl:text-5xl`}
          >
            {item.name[langArr]} {index + 1}
          </h1>
          <p
            className={`${text[arr]} hyphens-auto text-justify text-[4px] leading-[0.5rem] transition duration-300 sm:text-[6.6px] sm:leading-3 lg:text-xs 2xl:text-base`}
          >
            {item.content[langArr]}
          </p>
          <ul
            className={`${tags[arr]} hover: flex cursor-cell flex-row flex-wrap gap-x-[1dvw] text-[4px] leading-[0.5rem] transition duration-300  sm:text-[6.6px] sm:leading-3 lg:text-xs 2xl:text-base`}
          >
            {item.tag.map((item: any, index: number) => (
              <li key={index}>#{item}</li>
            ))}
          </ul>
        </article>
        <div className="flip-card-back absolute flex h-full w-full drop-shadow">
          <Link
            className="h-full overflow-hidden"
            href={item.link}
            target="_blank"
          >
            <Image
              src={item.image}
              width={5000}
              height={5000}
              alt="There should be an image!"
            />
          </Link>
        </div>
      </section>
    </main>
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-[5dvw] sm:grid-cols-2 lg:grid-cols-3">
        {grid}
      </div>
    </>
  );
}
