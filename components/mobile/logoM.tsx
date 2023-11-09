import { Master } from "@/app/store";
import { useCallback } from "react";
import { useStore } from "zustand";

export default function LogoM() {
  const { theme, language } = useStore(Master);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const textColor: string[] = ["text-[#141414]", "text-[#fcfcfc]"];
  const hover: string[] = ["hover:bg-color2", "hover:bg-colorB"];
  const bgColor: string[] = ["bg-color1", "bg-colorA"];

  return (
    <div
      title="Librouse!"
      onClick={() => reload()}
      className={`${textColor[theme]} ${hover[theme]} ${bgColor[theme]} cursor-pointer px-2 font-hyperlegible text-3xl font-black transition duration-300 sm:p-px md:p-1`}
    >
      {language == 0 ? "./BUGRA" : "./BUGRA"}
    </div>
  );
}
