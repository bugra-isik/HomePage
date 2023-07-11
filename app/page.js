"use client";

import Home from "./Home";
import MainContext, { useState, useEffect } from "./context/Context";

export default function Page() {
  const [data, setData] = useState();
  const [arr, setArr] = useState(0);
  const [langArr, setLangArr] = useState(0);
  const [click, setClick] = useState(null);

  useEffect(() => {
    localStorage.setItem("theme", arr);
  }, [arr]);

  useEffect(() => {
    localStorage.setItem("lang", langArr);
  }, [langArr]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("API hatası:", error);
      });
  }, [fetch("data.json")]);

  return (
    <MainContext.Provider
      value={{
        data,
        setData,
        arr,
        setArr,
        click,
        setClick,
        langArr,
        setLangArr,
      }}
    >
      <Home />
    </MainContext.Provider>
  );
}
