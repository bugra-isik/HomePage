import MainContext from "@/context/Context";
import { useContext, useCallback } from "react";

export default function Logo() {
  const { arr, langArr } = useContext(MainContext);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const themes: string[] = ["text-yellow", "text-blue"];
  const hover: string[] = ["hover:text-yellow2", "hover:text-blue2"];

  const tailwind =
    "transition duration-700 cursor-pointer font-ibm text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl";

  return (
    <>
      <li
        title="Librouse!"
        onClick={() => reload()}
        className={`${themes[arr]} ${tailwind} ${hover[arr]} font-black`}
      >
        {langArr == 0 ? "Buğra" : "Bugra"}
      </li>
    </>
  );
}
