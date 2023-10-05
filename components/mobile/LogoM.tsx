import MainContext from "@/context/Context";
import { useCallback, useContext } from "react";

export default function LogoM() {
  const { arr, langArr } = useContext(MainContext);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const textColor: string[] = ["text-[#141414]", "text-[#fcfcfc]"];
  const hover: string[] = ["hover:bg-yellow2", "hover:bg-blue2"];
  const bgColor: string[] = ["bg-yellow", "bg-blue"];

  return (
    <div
      title="Librouse!"
      onClick={() => reload()}
      className={`${textColor[arr]} ${hover[arr]} ${bgColor[arr]} sm:p-px md:p-1 cursor-pointer px-2 font-hyperlegible text-3xl font-black transition duration-300`}
    >
      {langArr == 0 ? "./BUGRA" : "./BUGRA"}
    </div>
  );
}
