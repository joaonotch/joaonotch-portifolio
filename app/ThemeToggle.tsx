"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 rounded-full p-1 bg-gray-300 dark:bg-[#30363d] border border-gray-400/50 dark:border-[#30363d] hover:border-lime-500/50 dark:hover:border-[#a3e635]/50 hover:shadow-[0_0_15px_-5px_rgba(163,230,53,0.3)] transition-shadow duration-500 focus:outline-none"
      aria-label="Alternar tema"
      title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {/* Ícones de Fundo Fixos */}
      <div className="absolute flex justify-between w-full px-2.5 left-0 pointer-events-none">
        <Sun className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
        <Moon className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Círculo (Thumb) Deslizante com Animação de Cor */}
      <div
        className={`relative w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center ${
          theme === "dark" ? "translate-x-8 bg-[#0d1117]" : "translate-x-0 bg-white"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-lime-500" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-lime-600" />
        )}
      </div>
    </button>
  );
}