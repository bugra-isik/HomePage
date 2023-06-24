import MainContext, {
  useEffect,
  useState,
  useContext,
} from "../context/Context";

export default function Footer() {
  const { data, arr, setArr } = useContext(MainContext);

  return (
    <div>
      <section></section>
    </div>
  );
}
