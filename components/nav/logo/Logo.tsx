import MainContext from "@/context/Context";
import { useCallback, useContext } from "react";

export default function Logo() {
  const { arr, langArr } = useContext(MainContext);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const textColor: string[] = ["text-[#141414]", "text-[#fcfcfc]"];
  const hover: string[] = ["hover:bg-yellow2", "hover:bg-blue2"];
  const bgColor: string[] = ["bg-yellow", "bg-blue"];

  return (
    <ul className={`col-span-1 flex h-[4dvw] items-center justify-start`}>
      <li
        title="Librouse!"
        onClick={() => reload()}
        className={`${textColor[arr]} ${hover[arr]} ${bgColor[arr]} lg:p-px xl:p-1 2xl:p-2 cursor-pointer px-2 font-hyperlegible font-black transition duration-300 
        sm:text-[12.5px] lg:text-[20px] 2xl:text-[30px]`}
      >
        {langArr == 0 ? "./BUGRA" : "./BUGRA"}
      </li>
    </ul>
  );
}
