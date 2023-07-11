
import MainContext, {
  useEffect,
  useState,
  useContext,
} from "../../context/Context";
import { red } from "@mui/material/colors";

export default function Footer() {
  const { data, arr, setArr } = useContext(MainContext);

  const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`


  return <Button>
    Zort
  </Button>;
}
