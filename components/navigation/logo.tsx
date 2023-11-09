import { Master } from "@/app/store";
import { useRouter } from "next/navigation";
import { useStore } from "zustand";

export default function Logo() {
  const { theme, language } = useStore(Master);
  const { refresh } = useRouter();

  const textColor: string[] = ["text-[#141414]", "text-[#fcfcfc]"];
  const hover: string[] = ["hover:bg-color2", "hover:bg-colorB"];
  const bgColor: string[] = ["bg-color1", "bg-colorA"];

  return (
    <ul className={`col-span-1 flex h-[4dvw] items-center justify-start`}>
      <li
        title="Librouse!"
        onClick={() => refresh()}
        className={`${textColor[theme]} ${hover[theme]} ${bgColor[theme]} cursor-pointer px-2 font-hyperlegible font-black transition duration-300 sm:text-[12.5px] lg:p-px lg:text-[20px] 
        xl:p-1 2xl:p-2 2xl:text-[30px]`}
      >
        {language == 0 ? "./BUGRA" : "./BUGRA"}
      </li>
    </ul>
  );
}
