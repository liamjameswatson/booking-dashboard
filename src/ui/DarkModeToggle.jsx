import { HiOutlineMoon } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import {useDarkMode} from '../context/DarkModeContext'

function DarkModeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode()

  return <ButtonIcon><HiOutlineMoon /></ButtonIcon>;
}

export default DarkModeToggle;
