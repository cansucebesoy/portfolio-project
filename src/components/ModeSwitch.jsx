import ReactSwitch from "react-switch";
import usePreferences from "../hooks/UsePreferences";
import { useEffect } from "react";
import Translation from "../Translation/Translation";

function ModeSwitch() {
  const { theme, setTheme } = usePreferences();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className="text-[inter] font-semibold text-sm bg-[#F5F5F5] text-[#777777] dark:bg-[#2A262B] flex items-center px-8 sm:px-24 pt-10 justify-end">
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        onColor="#000000"
        offColor="#E92577"
        checkedIcon={
          <div className="flex justify-center items-center h-full text-yellow-400 text-sm ">
            <div className="">🌙</div>
          </div>
        }
        uncheckedIcon={
          <div className="flex justify-center items-center h-full">
            <div className="bg-yellow-400 rounded-full w-2/4 h-2/4"></div>
          </div>
        }
        handleDiameter={0}
        width={40}
        height={20}
      />
      <label className="dark:text-[#D9D9D9] ml-2 " htmlFor="">
        {theme === "light" ? "LIGHT MODE" : "DARK MODE"}
      </label>
      <span className="mr-2 ml-2"> | </span>
      <Translation />
    </div>
  );
}
export default ModeSwitch;
