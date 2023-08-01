import MainContext from "@/context/Context";
import { useContext, useCallback } from "react";

export default function Logo() {
  const { arr, langArr } = useContext(MainContext);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const textColor: string[] = ["text-[#141414]", "text-[#fcfcfc]"];
  const hover: string[] = ["hover:bg-yellow2", "hover:bg-blue2"];
  const bgColor: string[] = ["bg-yellow", "bg-blue"];

  return (
    <>
      <li
        title="Librouse!"
        onClick={() => reload()}
        className={`${textColor[arr]} ${hover[arr]} ${bgColor[arr]} cursor-pointer px-2 font-hyperlegible font-black transition duration-300 
        sm:text-[12.5px] lg:text-[20px] 2xl:text-[30px]`}
      >
        {langArr == 0 ? "./BUGRA" : "./BUGRA"}
      </li>
    </>
  );
}
