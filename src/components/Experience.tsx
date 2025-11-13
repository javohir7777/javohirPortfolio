import { Card, CardContent } from "./ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function Experience() {
  const { t } = useThemeLanguage();
  
  const experiences = [
    {
      company: t("it_klaster"),
      position: t("frontend_mentor"),
      location: t("location"),
      period: "January 2024 - July 2025",
      color: "from-blue-500 to-indigo-500",
      current: false
    },
    {
      company: t("cout_company"),
      position: t("frontend_developer"),
      location: t("location"),
      period: "May 2025",
      color: "from-purple-500 to-pink-500",
      current: true
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-40"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm mb-4 backdrop-blur-sm border border-green-200 dark:border-green-800">
            💼 {t("experience")}
          </span>
          <h2 className="text-slate-900 dark:text-white mb-6 transition-colors">{t("experience")}</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="dark:bg-slate-800/50 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 group"
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`shrink-0 inline-flex p-4 bg-gradient-to-br ${exp.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 h-fit`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-slate-900 dark:text-white transition-colors text-xl mb-1">{exp.company}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{exp.position}</p>
                      </div>
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-800">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
