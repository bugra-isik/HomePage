import { useEffect, useState } from "../context/Context";

export default function Footer() {
  const [zort, setZort] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setZort(data);
      })
      .catch((error) => {
        console.error("API hatası:", error);
      });
  }, []);

  function switchTheme() {
    setZort((a) => ({
      ...a,
      theme: zort?.theme === "-dark" ? "-light" : "-dark",
    }));
  }

  return (
    <div>
      <section>
        <button onClick={switchTheme}>Butonzort</button>

        <h1 style={{color:"red"}}>{zort?.theme}</h1>
      </section>
    </div>
  );
}
