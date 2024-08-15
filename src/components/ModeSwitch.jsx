import ReactSwitch from "react-switch";
import usePreferences from "../hooks/UsePreferences";
import { useEffect } from "react";

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
    <div>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      <label htmlFor="">
        {" "}
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  );
}
export default ModeSwitch;
