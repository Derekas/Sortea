import { useEffect, useState } from "react";
export function useDarkMode() {
  const [theme, setTheme] = useState("light");

  const handleChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return {theme, handleChange}
}
