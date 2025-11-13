import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useThemeLanguage } from "./ThemeLanguageProvider";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, t, language } = useThemeLanguage();

  const navItems = [
    { label: t("home"), href: "#hero" },
    { label: t("about"), href: "#about" },
    { label: t("skills"), href: "#skills" },
    { label: t("projects"), href: "#projects" },
    { label: t("education"), href: "#education" },
    { label: t("experience"), href: "#experience" },
    { label: t("contact"), href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const downloadResume = () => {
    // Create resume content based on selected language
    const resumeContent = generateResumeContent(language);
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Javokhir_Jumayev_Resume_${language.toUpperCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-slate-900 dark:text-white transition-colors">
            {t("hero_name")}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="dark:text-slate-200 dark:hover:text-white"
              >
                {item.label}
              </Button>
            ))}
            
            {/* Download Resume Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={downloadResume}
              className="dark:text-slate-200"
              title={t("download_resume")}
            >
              <Download className="w-5 h-5" />
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="dark:text-slate-200"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            {/* Language Selector */}
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={downloadResume}
              className="dark:text-slate-200"
            >
              <Download className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="dark:text-slate-200"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            
            <LanguageSelector />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="dark:text-slate-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start dark:text-slate-200 dark:hover:text-white"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// Helper function to generate resume content
function generateResumeContent(language: "uz" | "en" | "ru"): string {
  const content = {
    uz: `JAVOKHIR JUMAYEV
Frontend Dasturchi

O'zbekiston, Qarshi | javohirjumayev7777@gmail.com | +998996786762
GitHub | Telegram | Linkedin

MEN HAQIMDA
React.js va zamonaviy UI kutubxonalari bilan tajribaga ega Frontend dasturchi. Foydalanuvchilarga qulay ilovalar yaratish va yangi texnologiyalarni o'rganishga ishtiyoqli.

TILLAR
O'zbek - Ona tili | Ingliz - Boshlang'ich | Rus - Boshlang'ich

TEXNIK KO'NIKMALAR
Scratch, Html, Css, Scss, Bootstrap, Material UI, Ant design, Javascript, C++, React, Redux, Redux Toolkit, Typescript, NextJs, Git, GitHub, Axios,

LOYIHALAR

E-Commerce - Html, Css, Bootstrap, JavaScript. (GitHub)
E-commerce onlayn xarid qilish loyihasi

CRUD - Html, Bootstrap, JavaScript. (GitHub)
Backend'dan ma'lumotlarni oladi. Messages sahifasidagi formani to'ldirib, ma'lumotlaringiz Telegram botga yuboriladi.

Haitov.uz - React.js. (GitHub private)
Backend ma'lumotlari kelmoqda. Kirish himoyalangan. Login: Username: a Password: a

Aqlli-maktab - React.js, Ant.design, Axios, Redux-toolkit. (GitHub private) CRM Sistem
• Platforma uchun sahifalar, komponentlar va interfeys yaratdim.
• Ant Design yordamida professional UI yaratdim.
• Backend API bilan CRUD operatsiyalarini amalga oshirdim.
• Rol asosida kirish (RBAC) interfeyslarini yaratdim (admin, marketer, o'qituvchi va h.k.).
• SMS xabarnoma funksiyasi uchun UI yaratdim.

TA'LIM
Najot ta'lim
Kurs: React.js
Toshkent, O'zbekiston
2023 May - Oktabr 2023

Toshkent Axborot Texnologiyalari Universiteti
Toshkent, O'zbekiston
Sentyabr 2019 - Iyun 2023

Qarshi Qurilish Kolleji
Qarshi, O'zbekiston
Sentyabr 2016 - Iyun 2019

SHAXSIY KO'NIKMALAR
Halollik
Jamoada Ishlash
O'rganish va Savollar Berishda Faol
Muloqotchan
Taslim Bo'lmaslik

TAJRIBA
IT Klaster academy
Frontend mentor va dasturchi
Qarshi, O'zbekiston
Yanvar 2024 - Iyul 2025

Cout company
Frontend dasturchi
Qarshi, O'zbekiston
May 2025`,

    en: `JAVOKHIR JUMAYEV
Frontend Developer

Uzbekistan, Karshi | javohirjumayev7777@gmail.com | +998996786762
GitHub | Telegram | Linkedin

ABOUT ME
Frontend developer with hands-on experience in React.js and modern UI libraries. Passionate about building user-friendly applications and continuously learning new technologies.

LANGUAGES
Uzbek - Native | English - Elementary | Russian - Elementary

TECHNICAL SKILLS
Scratch, Html, Css, Scss, Bootstrap, Material UI, Ant design, Javascript, C++, React, Redux, Redux Toolkit, Typescript, NextJs, Git, GitHub, Axios,

PROJECTS

E-Commerce - Html, Css, Bootstrap, JavaScript. (GitHub)
E-commerce online shopping project

CRUD - Html, Bootstrap, JavaScript. (GitHub)
It fetches data from the backend. By filling out the form on the Messages page, your data will be sent to the Telegram bot.

Haitov.uz - React.js. (GitHub private)
Backend data is coming. Access is secured with authorized. Login password: Username: a Password: a can be accessed.

Aqlli-maktab - React.js, Ant.design, Axios, Redux-toolkit. (GitHub private) CRM System
• Developed pages, components, and user interface for the platform.
• Built an interactive and professional UI using Ant Design.
• Integrated CRUD operations (create, read, update, delete) with backend APIs.
• Implemented role-based access (RBAC) interfaces (admin, marketer, deputy head, etc.).
• Created the UI for SMS notification functionality.

EDUCATION
Najot ta'lim
Course: React.js
Tashkent, Uzbekistan
2023 May - October 2023

Tashkent University of Information Technologies
Tashkent, Uzbekistan
September 2019 - June 2023

Karshi Construction College
Karshi, Uzbekistan
September 2016 - June 2019

SOFT SKILLS
Honesty
Teamwork
Proactive in Learning and Asking Questions
Sociable
Don't give up

EXPERIENCE
IT Klaster academy
Frontend mentor and developer
Karshi, Uzbekistan
January 2024 - July 2025

Cout company
Frontend developer
Karshi, Uzbekistan
May 2025`,

    ru: `ДЖАВОХИР ДЖУМАЕВ
Frontend Разработчик

Узбекистан, Карши | javohirjumayev7777@gmail.com | +998996786762
GitHub | Telegram | Linkedin

ОБО МНЕ
Frontend разработчик с практическим опытом работы с React.js и современными UI библиотеками. Увлечён созданием удобных приложений и постоянным изучением новых технологий.

ЯЗЫКИ
Узбекский - Родной | Английский - Начальный | Русский - Начальный

ТЕХНИЧЕСКИЕ НАВЫКИ
Scratch, Html, Css, Scss, Bootstrap, Material UI, Ant design, Javascript, C++, React, Redux, Redux Toolkit, Typescript, NextJs, Git, GitHub, Axios,

ПРОЕКТЫ

E-Commerce - Html, Css, Bootstrap, JavaScript. (GitHub)
Проект интернет-магазина

CRUD - Html, Bootstrap, JavaScript. (GitHub)
Получает данные с бэкенда. Заполнив форму на странице Messages, ваши данные будут отправлены в Telegram бот.

Haitov.uz - React.js. (GitHub private)
Данные с бэкенда поступают. Доступ защищён. Логин: Username: a Password: a

Aqlli-maktab - React.js, Ant.design, Axios, Redux-toolkit. (GitHub private) CRM Система
• Разработал страницы, компоненты и интерфейс для платформы.
• Создал интерактивный и профессиональный UI с использованием Ant Design.
• Интегрировал CRUD операции (создание, чтение, обновление, удаление) с backend APIs.
• Реализовал интерфейсы с ролевым доступом (RBAC) (админ, маркетолог, завуч и т.д.).
• Создал UI для функционала SMS уведомлений.

ОБРАЗОВАНИЕ
Najot ta'lim
Курс: React.js
Ташкент, Узбекистан
2023 Май - Октябрь 2023

Ташкентский университет информационных технологий
Ташкент, Узбекистан
Сентябрь 2019 - Июнь 2023

Каршинский строительный колледж
Карши, Узбекистан
Сентябрь 2016 - Июнь 2019

ЛИЧНЫЕ НАВЫКИ
Честность
Командная работа
Активность в обучении и вопросах
Общительность
Не сдаваться

ОПЫТ РАБОТЫ
IT Klaster academy
Frontend ментор и разработчик
Карши, Узбекистан
Январь 2024 - Июль 2025

Cout company
Frontend разработчик
Карши, Узбекистан
Май 2025`
  };

  return content[language];
}