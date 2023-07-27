import MainContext from "@/context/Context";
import { useContext, useEffect, useState } from "react";

export default function Footer() {
  const { data, arr, setArr } = useContext(MainContext);

  const [deneme, setDeneme] = useState();

  return <></>;
}
