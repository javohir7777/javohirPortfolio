import { Card, CardContent } from "./ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function Education() {
  const { t } = useThemeLanguage();
  
  const education = [
    {
      school: t("najot_talim"),
      degree: t("course_react"),
      location: t("tashkent_uz"),
      period: "2023 May - October 2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      school: t("tashkent_university"),
      degree: "",
      location: t("tashkent_uz"),
      period: "September 2019 - June 2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      school: t("karshi_construction"),
      degree: "",
      location: t("location"),
      period: "September 2016 - June 2019",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="education" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 dark:bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm mb-4 backdrop-blur-sm border border-purple-200 dark:border-purple-800">
            🎓 {t("education_title")}
          </span>
          <h2 className="text-slate-900 dark:text-white mb-6 transition-colors">{t("education_title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="dark:bg-slate-800/50 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-2 group"
            >
              <CardContent className="pt-8 pb-6">
                <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-slate-900 dark:text-white mb-3 transition-colors text-xl">{edu.school}</h3>
                {edu.degree && (
                  <p className="text-blue-600 dark:text-blue-400 mb-4">{edu.degree}</p>
                )}
                <div className="space-y-2 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Soft Skills */}
        <div className="mt-16 bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-slate-900 dark:text-white text-2xl mb-2">💼 {t("soft_skills")}</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-3xl mb-2">✨</div>
              <p className="text-slate-700 dark:text-slate-200">{t("honesty")}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-3xl mb-2">🤝</div>
              <p className="text-slate-700 dark:text-slate-200">{t("teamwork")}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-slate-700 dark:text-slate-200">{t("proactive")}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-3xl mb-2">😊</div>
              <p className="text-slate-700 dark:text-slate-200">{t("sociable")}</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-3xl mb-2">💪</div>
              <p className="text-slate-700 dark:text-slate-200">{t("dont_give_up")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
