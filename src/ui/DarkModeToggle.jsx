import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {/* Change icon from moon to sun */}
      {isDarkMode ? <HiOutlineSun /> : 
      <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
