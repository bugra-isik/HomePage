import { Master } from "@/app/store";
import blogData from "@/db/blog.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "zustand";

export default function Blog() {
  const { language, theme } = useStore(Master);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const blogElements = blogData.map((e, i) => (
    <motion.div variants={item} key={i}>
      <Link
        className={`${
          theme ? "bg-light2 hover:bg-light1/75" : "bg-dark2 hover:bg-dark1/75"
        } grid h-20 w-full grid-cols-7 items-center gap-5 overflow-hidden rounded pl-5 drop-shadow transition duration-300 sm:gap-5 sm:pl-10`}
        href={e.route}
      >
        <p
          className={`${
            theme ? "text-colorA" : "text-color1"
          } col-span-2 truncate text-3xl transition duration-300 sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
        >
          {e.header[language]}
        </p>
        <p
          className={`col-span-5 line-clamp-2 text-sm transition duration-300 sm:text-lg md:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl`}
        >
          {e.Description[language]}
        </p>
      </Link>
    </motion.div>
  ));

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className={`${
        theme ? "text-dark1" : "text-light2"
      } mt-6 flex flex-col gap-y-5 sm:mt-8 md:mt-10`}
    >
      {blogElements}
    </motion.main>
  );
}
