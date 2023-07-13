
import MainContext from "@/context/Context";
import React, { useContext, useState, useEffect, useRef } from "react";

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

  const mouseOver = data?.content.mouseOverText.langButton[langArr];
  const langs = ["TR", "EN"];
  const langClass = [lang, lang2];

  const bgColor = ["gray-100","gray-950"];
  const hover=["amber-500","blue-800"]

  const items = langs.map((value, index) => (
    <div
      key={index}
      className={`${langClass[index]} text-4xl  cursor-pointer navpage-${arr}`}
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

