import React, { useContext, useState, useEffect, useRef } from "react";
import MainContext from "../../../context/Context";

const LanguageSwitch = () => {
  const { setLangArr, data, langArr, arr } = useContext(MainContext);

  useEffect(() => {
    if (localStorage.getItem("lang") == 1) {
      ref.current.click();
    } else {
    }
  }, []);

  const ref = useRef();

  const [lang, setLang] = useState();
  const [lang2, setLang2] = useState("hidden");

  function handle() {
    setLang((p) => (p === "hidden" ? "" : "hidden"));
    setLang2((p) => (p === "hidden" ? "" : "hidden"));
    setLangArr((p) => (p == 0 ? 1 : 0));
  }

  // const Langs = styled.h1`
  /* color: ${data?.navLinkColor2[arr]}; */
  /* cursor: pointer; */
  /* font-size: 1.5rem; */

  /* &:hover { */
  /* color: ${data?.navLinkColor3[arr]}; */
  /* } */
  // `;

  const mouseOver = data?.content.mouseOverText.langButton[langArr];
  const langs = ["TR", "EN"];
  const langClass = [lang, lang2];

  const items = langs.map((value, index) => (
    <div
      className={langClass[index]}
      ref={ref}
      title={mouseOver}
      onClick={handle}
    >
      {value}
    </div>
  ));

  return <>{items}</>;
};

export default LanguageSwitch;
