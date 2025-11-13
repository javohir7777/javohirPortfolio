import { useState, useRef, useEffect } from "react";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useThemeLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "uz" | "en" | "ru") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="dark:text-slate-200"
      >
        <Languages className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 z-50">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange("uz")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors ${
                language === "uz" ? "bg-slate-50 dark:bg-slate-700/50" : ""
              }`}
            >
              O'zbek
            </button>
            <button
              onClick={() => handleLanguageChange("ru")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors ${
                language === "ru" ? "bg-slate-50 dark:bg-slate-700/50" : ""
              }`}
            >
              Русский
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors ${
                language === "en" ? "bg-slate-50 dark:bg-slate-700/50" : ""
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
}