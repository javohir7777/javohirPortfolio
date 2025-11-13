import { useThemeLanguage } from "./ThemeLanguageProvider";

export function Footer() {
  const { t } = useThemeLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-300 dark:text-slate-400 py-12 px-4 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800 dark:bg-grid-slate-900 opacity-20"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </div>
        <p className="mb-2 text-slate-400">© 2025 Portfolio. {t("footer_rights")}</p>
        <p className="text-slate-500 dark:text-slate-600 transition-colors">
          {t("footer_built")} ❤️
        </p>
      </div>
    </footer>
  );
}