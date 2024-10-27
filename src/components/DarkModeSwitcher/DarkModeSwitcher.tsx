"use client";
import { useState, useEffect } from "react";
import Icon from "../Icon";

export const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  const LightIcon = () => <Icon name="sun" size={22} />;

  const DarkIcon = () => <Icon name="moon" size={22} />;

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-ghost dark:btn-primary btn-circle"
    >
      {isDarkMode ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default DarkModeSwitcher;
