import "./switch.css";
import { useRef, useEffect, useContext, useState } from "react";
import MainContext from "../../../context/Context";

export default function Switch() {
  const { data, arr, setArr } = useContext(MainContext);
  const buttonRef = useRef();
  useEffect(() => {
    if (localStorage.getItem("theme") == 1) {
      buttonRef.current.click();
    } else {
    }
  }, []);

  function switchTheme() {
    setArr((p) => (p === 0 ? 1 : 0));
  }
  return (
    <li>
      <span title="This is a mouseover text!">
        <span id="switch" className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" />
          <label
            ref={buttonRef}
            onClick={switchTheme}
            htmlFor="dn"
            className="toggle"
          >
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
            <div className="center">
              <div id="cloud"></div>
            </div>
          </label>
        </span>
      </span>
    </li>
  );
}
