"use client";

import MainContext, { useContext } from "../../context/Context";
import Switch from "../nav/toggleSwitch/Switch";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

// const { id, name, salary } = useContext(MainContext);

export default function Main() {
  const { click } = useContext(MainContext);

  return (
    <div>
      {click === "Projects" && (
        <div>
          <Projects />
        </div>
      )}
      {click === "About" && (
        <div>          
          <About />
        </div>
      )}
      {click === "Contact" && (
        <div>
          <Contact />
        </div>
      )}
    </div>
  );
}
