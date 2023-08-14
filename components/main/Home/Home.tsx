import MainContext from "@/context/Context";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Home() {
  const { arr } = useContext(MainContext);

  const video: string[] = ["/dark.mp4", "/light.mp4"];
  return (
    <motion.video
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={arr}
      className={`select-none rounded`}
      autoPlay
      muted
      loop
      disablePictureInPicture={true}
    >
      <source src={video[arr]} type="video/mp4" />
    </motion.video>
  );
}
