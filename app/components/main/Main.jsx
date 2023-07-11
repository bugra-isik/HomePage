"use client";

import MainContext, { useContext } from "../../context/Context";
import Switch from "../nav/toggleSwitch/Switch";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import styled from "styled-components";

export default function Main() {
  const { click, data, arr, langArr } = useContext(MainContext);

  // const Main = styled.main`
  //   color: ${data?.textColor2[arr]};
  //   font-size: 5rem;
  //   margin: 10vw 10vw 0vw 10vw;
  //   text-align: justify;
  // `;

  return (
    <>
      <div>
        {click === null && <>{data?.content.siteState[langArr]}</>}
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
      </div>
    </>
  );
}
