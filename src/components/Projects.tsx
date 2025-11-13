import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function Projects() {
  const { t } = useThemeLanguage();

  const projects = [
    {
      title: t("ecommerce_title"),
      description: t("ecommerce_desc"),
      image:
        "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyOTkyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      demoLink: "#",
      githubLink: "https://github.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: t("crud_title"),
      description: t("crud_desc"),
      image:
        "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjkzOTIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "Bootstrap", "JavaScript"],
      demoLink: "#",
      githubLink: "https://github.com",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: t("haitov_title"),
      description: t("haitov_desc"),
      image:
        "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyOTQ5MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.js"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: t("crm_title"),
      description: t("crm_desc"),
      image:
        "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyOTkyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.js", "Ant Design", "Redux Toolkit"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm mb-4 backdrop-blur-sm border border-purple-200 dark:border-purple-800">
            ✨ {t("projects_title")}
          </span>
          <h2 className="text-slate-900 dark:text-white mb-6 transition-colors">
            {t("projects_title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors">
            {t("projects_description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-slate-800/50 dark:border-slate-700 group backdrop-blur-sm hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
                ></div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="dark:text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="dark:border-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all"
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {t("demo")}
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      {t("code")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
