import { Switch } from "@headlessui/react";
import MainContext, {
  useEffect,
  useState,
  useContext,
} from "../context/Context";

export default function Footer() {
  const { data, arr, setArr } = useContext(MainContext);

  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <section>
       
      </section>
    </div>
  );
}
