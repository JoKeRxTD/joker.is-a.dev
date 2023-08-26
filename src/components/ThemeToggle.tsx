import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as string;

    if (!storedTheme) localStorage.setItem("theme", theme);
    else {
      setTheme(storedTheme);
      storedTheme === "dark" ? document.querySelector("html")?.classList.add("dark") : null;
    }
  }, []);

  const changeTheme = (theme: string) => {
    const newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    newTheme === "light"
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  return (
    <button
      className="p-2 rounded-md bg-transparent hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
      onClick={() => changeTheme(theme)}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
      
    </button>
  );
};

export default ThemeToggle;
