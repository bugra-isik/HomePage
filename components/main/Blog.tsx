import { Master } from "@/app/store";
import blogData from "@/db/blog.json";
import Link from "next/link";
import { useStore } from "zustand";

export default function Blog() {
  const { language, theme } = useStore(Master);
  const blogElements = blogData.map((e, i) => (
    <Link
      target="_blank"
      key={i}
      className={`${
        theme ? "bg-light2 hover:bg-light1/75" : "bg-dark2 hover:bg-dark1/75"
      } flex h-20 w-full items-center gap-5 sm:gap-20 rounded pl-5 sm:pl-10 drop-shadow transition duration-300 overflow-hidden`}
      href={e.route}
    >
      <p
        className={`${
          theme ? "text-colorA" : "text-color1"
        } text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl transition duration-300`}
      >
        {e.header[language]}
      </p>
      <p
        className={`hyphens-auto text-sm transition duration-300 sm:text-lg md:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl`}
      >
        {e.Description[language]}
      </p>
    </Link>
  ));

  return (
    <main className={`${theme ? "text-dark1" : "text-light2"} mt-6 sm:mt-8 md:mt-10`}>
      {blogElements}
    </main>
  );
}
