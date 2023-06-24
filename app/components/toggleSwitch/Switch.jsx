import MainContext from "../../context/Context";
import "./switch.css";
import { useContext, useState } from "../../context/Context";

export default function Switch() {
  const { data, arr, setArr } = useContext(MainContext);

  function switchTheme() {
    setArr((parameter) => (parameter === 0 ? 1 : 0));
  }
  return (
    <span >
      <span id="switch" className="toggleWrapper">
        <input type="checkbox" className="dn" id="dn" />
        <label onClick={switchTheme} htmlFor="dn" className="toggle">
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
        </label>
      </span>
    </span>
  );
}
