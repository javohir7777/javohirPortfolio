import { Button } from "./ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useThemeLanguage } from "./ThemeLanguageProvider";
import { myImage, noImage } from "./assets";

export function Hero() {
  const { t } = useThemeLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 px-4 transition-colors overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center">
          <img
            className="object-cover rounded-full dark:bg-slate-800/50 rounded-2xl p-3 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
            src={myImage}
            alt="no-img?"
            style={{
              width: "200px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="space-y-6">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              👋 {t("hero_name")}
            </span>
          </div>

          <h1 className="text-slate-900 dark:text-white transition-colors">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t("hero_title")}
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors leading-relaxed">
            {t("hero_description")}
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            {t("view_projects")}
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="border-2 border-slate-300 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
          >
            {t("contact_me")}
          </Button>
        </div>

        {/* Stats or highlights */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              2+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Years Exp
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Satisfied
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors z-10"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
