import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "english";
  });
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
        lang,
        setLang,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
