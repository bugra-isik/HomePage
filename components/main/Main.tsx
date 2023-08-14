"use client";
import MainContext from "@/context/Context";
import { useContext } from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import TopButton from "./TopButton/TopButton";

export default function Main() {
  const { click, arr, text } = useContext(MainContext);

  return (
    <>
      <TopButton />
      <main
        className={`${text[arr]} container mx-auto mt-10 px-10 font-hyperlegible text-sm sm:px-20 `}
      >
        {click === null && <Home />}
        {click === "Home" && <Home />}
        {click === "Projects" && <Projects />}
        {click === "About" && <About />}
      </main>
    </>
  );
}
