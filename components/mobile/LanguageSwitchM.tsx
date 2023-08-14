import MainContext from "@/context/Context";
import { useCallback, useContext, useEffect, useRef} from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LanguageSwitchM() {
  const { setLangArr, data, langArr, arr, text } = useContext(MainContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem("lang") == "1") {
      ref.current?.click();
    }
  }, []);

  const handle = useCallback(() => {
    setLangArr((p: number) => (p == 0 ? 1 : 0));
  }, [setLangArr]);

  const mouseOver = data?.content.mouseOverText.langButton[langArr];

  const hoverColor = ["hover:text-yellow", "hover:text-blue"];
  const hidden = ["", "hidden"];
  const bgColor = ["bg-dark", "bg-light2"];

  return (
    <>
      <div
        className={`${text[arr]} ${hoverColor[arr]} ${hidden[langArr]} ${bgColor[arr]} flex cursor-pointer items-center justify-center rounded transition duration-300`}
        title={mouseOver}
        onClick={() => handle()}
      >
        <span className="fi fi-tr text-2xl"></span>
      </div>
      <div
        className={`${text[arr]} ${hoverColor[arr]} ${
          hidden[langArr == 0 ? 1 : 0]
        } ${
          bgColor[arr]
        } flex cursor-pointer items-center justify-center rounded transition duration-300`}
        ref={ref}
        title={mouseOver}
        onClick={() => handle()}
      >
        <span className="fi fi-us text-2xl"></span>
      </div>
    </>
  );
}
