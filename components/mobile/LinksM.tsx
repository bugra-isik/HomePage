import Link from "next/link";
import data from "@/db/data.json";
import { Master } from "@/app/store";
import { useStore } from "zustand";

export default function LinksM() {
  const { theme, language, setClick, click, setIsOpen } = useStore(Master);

  const list = data?.nav.map((item: any, index: number) => (
    <div key={index} className={`flex items-center py-4`}>
      <div className={`flex gap-1`}>
        <Link
          href={``}
          className={`${theme ? "hover:text-colorA" : "hover:text-color1"} ${
            click === item[1]
              ? theme
                ? "text-colorA"
                : "text-color1"
              : theme
              ? "text-dark1"
              : "text-light1"
          } transition duration-300`}
          onClick={() => {
            setClick(item[1]);
            setIsOpen();
          }}
        >
          {item[language]}
        </Link>
      </div>
    </div>
  ));
  return (
    <li
      className={`mb-6 flex w-full flex-col gap-6 pt-10 text-3xl sm:mb-8 sm:gap-8 sm:text-4xl md:mb-10 md:gap-10 md:text-5xl`}
    >
      {list}
    </li>
  );
}
