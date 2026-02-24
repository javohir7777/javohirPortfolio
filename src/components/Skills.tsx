import { Badge } from "./ui/badge";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function Skills() {
  const { t } = useThemeLanguage();

  const skillCategories = [
    {
      category: t("frontend"),
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Redux",
        "Redux Toolkit",
        "HTML",
        "CSS",
        "Scss",
      ],
      icon: "🎨",
    },
    {
      category: t("backend"),
      skills: [
        "Node.js",
        "Express",
        "Python",
        "REST API",
        "Axios",
        "Fetch",
        "Swagger",
        "Postman",
      ],
      icon: "⚙️",
    },
    {
      category: t("tools"),
      skills: [
        "Git",
        "GitHub",
        "Ant Design",
        "Material UI",
        "Bootstrap",
        "Figma",
        "Tailwind CSS",
        "VS Code",
      ],
      icon: "🛠️",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm mb-4 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800">
            🚀 {t("skills_title")}
          </span>
          {/* <h2 className="text-slate-900 dark:text-white mb-6 transition-colors">
            {t("skills_title")}
          </h2> */}
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors">
            {t("skills_description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-slate-900 dark:text-white transition-colors text-xl">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 hover:scale-105 px-4 py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-16 bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-6">
            <h3 className="text-slate-900 dark:text-white text-2xl mb-2">
              🌍 {t("languages")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 px-6 py-2 text-base">
              {t("uzbek_native")}
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 px-6 py-2 text-base">
              {t("english_elementary")}
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 px-6 py-2 text-base">
              {t("russian_elementary")}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
