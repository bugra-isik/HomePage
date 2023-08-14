import MainContext from "@/context/Context";
import { motion } from "framer-motion";
import { useCallback, useContext, useEffect, useRef} from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LanguageSwitch = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hidden cursor-pointer sm:block 
    "
    >
      <div
        className={`${text[arr]} ${hoverColor[arr]} ${hidden[langArr]} transition duration-300`}
        title={mouseOver}
        onClick={() => handle()}
      >
        {" "}
        <span className="fi fi-tr"></span>
      </div>
      <div
        className={`${text[arr]} ${hoverColor[arr]} ${
          hidden[langArr == 0 ? 1 : 0]
        }   transition duration-300`}
        ref={ref}
        title={mouseOver}
        onClick={() => handle()}
      >
        <span className="fi fi-us"></span>
      </div>
    </motion.div>
  );
};

export default LanguageSwitch;
