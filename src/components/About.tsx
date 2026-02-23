import { Card, CardContent } from "./ui/card";
import { Code2, Palette, Zap } from "lucide-react";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function About() {
  const { t } = useThemeLanguage();

  const features = [
    {
      icon: Code2,
      title: t("clean_code"),
      description: t("clean_code_desc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: t("modern_design"),
      description: t("modern_design_desc"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: t("fast_performance"),
      description: t("fast_performance_desc"),
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* <img src={noImage} alt="" /> */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm mb-4 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            💼 {t("about_title")}
          </span>
          <h2 className="text-slate-900 dark:text-white mb-6 transition-colors">
            {t("about_title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors">
            {t("about_description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group hover:-translate-y-2"
            >
              <CardContent className="pt-8 pb-6">
                <div
                  className={`mb-6 inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-slate-900 dark:text-white mb-3 transition-colors text-xl">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
