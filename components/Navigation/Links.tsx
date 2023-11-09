import { Master } from "@/app/store";
import Badge from "@/components/UI/Badge";
import data from "@/db/data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "zustand";

export default function Links() {
  const { theme, language, setClick, click } = useStore(Master);

  const list = data?.nav.map((item: any, index: number) => (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id={item[1]}
      key={index}
      className={`items-center justify-between`}
    >
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
          onClick={() => setClick(item[1])}
        >
          {item[language]}
        </Link>
      </div>
    </motion.li>
  ));
  return (
    <ul
      className={`col-span-2 hidden h-[4dvw] items-center justify-evenly sm:flex`}
    >
      {list}
    </ul>
  );
}
