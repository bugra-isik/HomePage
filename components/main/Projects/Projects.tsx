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
  const text2: string[] = ["text-blue", "text-yellow"];
  const bg: string[] = ["bg-yellow", "bg-blue"];

  const grid = projects.map((item, index) => (
    <div
      key={index}
      className="flip-card h-40  bg-transparent font-hyperlegible "
    >
      <div className="flip-card-inner relative h-full w-full">
        <div
          className={`${bg[arr]} flip-card-front container absolute flex h-full w-full flex-col justify-between rounded-2xl p-[1dvw] text-[26px] text-dark drop-shadow backdrop-blur transition  duration-300 `}
        >
          <h1
            className={`${text[arr]} title mt-[1dvw] text-[2em] font-black transition duration-300`}
          >
            {item.name[langArr]} {index + 1}
          </h1>
          <h2
            className={`${text[arr]} hyphens-auto text-justify text-[.5em] transition duration-300`}
          >
            {item.content[langArr]}
          </h2>
          <section
            className={`${text2[arr]} hover: flex flex-row flex-wrap gap-x-[1dvw] text-sm transition duration-300 `}
          >
            {item.tag.map((item: any, index: number) => (
              <button key={index} type="button">
                #{item}
              </button>
            ))}
          </section>
        </div>
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
      </div>
    </div>
  ));

  return (
    <>
     
      <div className="grid grid-cols-3 gap-[5dvw]">{grid}</div>
    </>
  );
}
