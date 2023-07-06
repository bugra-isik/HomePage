import React, { useContext, useState } from "react";
import MainContext from "../../../context/Context";

const LanguageSwitch = () => {
  const [lang, setLang] = useState();
  const [lang2, setLang2] = useState("hidden");


  const [style, setStyle] = useState(null);



  const [style2, setStyle2] = useState(null);

  function handle() {
    setLang((parameter) => (parameter === "hidden" ? "" : "hidden"));
    setLang2((parameter) => (parameter === "hidden" ? "" : "hidden"));

    setStyle({transform: "translateY(-20px)"})
  }

  return (
    <div onClick={handle} className="language-switch flex flex-col gap-16">
      <button className={lang} type="button" style={ style }>
        {"TR"}
      </button>
      <button className={lang2} type="button" style={ style2 }>
        {"EN"}
      </button>
    </div>
  );
};

export default LanguageSwitch;
