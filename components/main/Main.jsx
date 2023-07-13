"use client";

import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { useContext } from "react";
import MainContext from "@/context/Context";

export default function Main() {
  const { click, data, arr, langArr } = useContext(MainContext);

  const bgColor = ["#030712", "#f9fafb"];
  return (
    <>
      <main
        style={{ backgroundColor: bgColor[arr] }}
        className={`text-amber-500 min-h-screen mt-5 rounded-md font-hyperlegible`}
      >
        {click === null && (
          <div
            style={{ color: bgColor[arr == 1 ? 0 : 1] }}
            className=" 2xl:text-5xl lg:text-3xl sm:text-xl  text-sm text-center "
          >
            {data?.content.siteState[langArr]}
          </div>
        )}
        {click === "Home" && <Home />}
        {click === "Projects" && (
          <>
            <Projects />
          </>
        )}
        {click === "About" && (
          <>
            <About />
          </>
        )}
        {click === "Contact" && (
          <>
            <Contact />
          </>
        )}
      </main>
    </>
  );
}
