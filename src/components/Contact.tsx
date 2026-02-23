import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeLanguage } from "./ThemeLanguageProvider";

export function Contact() {
  const { t } = useThemeLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t("email"),
      value: "javohirjumayev7777@gmail.com",
      href: "mailto:javohirjumayev7777@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+998 99 678 67 62",
      href: "tel:+998996786762",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: t("address"),
      value: t("location"),
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/javohir7777",
      color: "hover:text-slate-900 dark:hover:text-slate-100",
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/javohir_zafar0vich",
      color: "hover:text-blue-500 dark:hover:text-blue-400",
    },
    {
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/javokhir-jumayev-01a91b235/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm mb-4 backdrop-blur-sm border border-green-200 dark:border-green-800">
            📬 {t("contact_title")}
          </span>
          <h2 className="text-slate-900 dark:text-white mb-6 transition-colors">
            {t("contact_title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors">
            {t("contact_description")}
          </p>
        </div>

        <Card className="mb-10 dark:bg-slate-800/50 dark:border-slate-700 shadow-2xl backdrop-blur-sm">
          <CardContent className="pt-8 pb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 group"
                >
                  <div
                    className={`p-4 bg-gradient-to-br ${contact.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 transition-colors text-sm mb-1">
                      {contact.label}
                    </p>
                    <p className="text-slate-900 dark:text-white transition-colors font-medium">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg transition-colors">
            {t("social_media")}
          </p>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                asChild
                className={`dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg w-12 h-12 ${social.color}`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {typeof social.icon === "function" ? (
                    <social.icon />
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
