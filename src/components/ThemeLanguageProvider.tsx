import { createContext, useContext, useEffect, useState } from "react";

type Language = "uz" | "en" | "ru";
type Theme = "light" | "dark";

interface ThemeLanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const ThemeLanguageContext = createContext<
  ThemeLanguageContextType | undefined
>(undefined);

const translations = {
  uz: {
    portfolio: "Portfolio",
    home: "Bosh sahifa",
    about: "Men haqimda",
    skills: "Ko'nikmalar",
    projects: "Loyihalar",
    contact: "Bog'lanish",
    education: "Ta'lim",
    experience: "Tajriba",
    download_resume: "Rezyumeni Yuklab Olish",
    hero_name: "Javokhir Jumayev",
    hero_title: "Frontend Dasturchi",
    hero_description:
      "React.js va zamonaviy UI kutubxonalari bilan tajribaga ega Frontend dasturchi. Foydalanuvchilarga qulay ilovalar yaratish va yangi texnologiyalarni o'rganishga ishtiyoqli.",
    view_projects: "Loyihalarni Ko'rish",
    contact_me: "Bog'lanish",
    about_title: "Men Haqimda",
    about_description:
      "React.js va zamonaviy UI kutubxonalari bilan tajribaga ega Frontend dasturchi. Foydalanuvchilarga qulay ilovalar yaratish va yangi texnologiyalarni o'rganishga ishtiyoqli.",
    clean_code: "Toza Kod",
    clean_code_desc: "Toza va samarali kod yozishga e'tibor beraman",
    modern_design: "Modern Dizayn",
    modern_design_desc: "Zamonaviy va chiroyli interfeys yarataman",
    fast_performance: "Tezkor Ishlash",
    fast_performance_desc: "Yuqori samaradorlikka erishaman",
    skills_title: "Texnik Ko'nikmalar",
    skills_description: "Men ishlagan texnologiyalar va asboblar",
    frontend: "Frontend",
    backend: "Backend hamkorlik",
    tools: "Vositalar",
    projects_title: "Loyihalar",
    projects_description: "Men ustida ishlagan ba'zi loyihalar",
    demo: "Demo",
    code: "Kod",
    contact_title: "Bog'lanish",
    contact_description: "Loyihangiz bo'yicha gaplashishdan xursand bo'laman",
    email: "Email",
    phone: "Telefon",
    address: "Manzil",
    location: "Qarshi, O'zbekiston",
    social_media: "Ijtimoiy tarmoqlarda",
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_built: "React va Tailwind CSS bilan yaratilgan",
    education_title: "Ta'lim",
    soft_skills: "Shaxsiy Ko'nikmalar",
    languages: "Tillar",
    uzbek_native: "O'zbek - Ona tili",
    english_elementary: "Ingliz - Boshlang'ich",
    russian_elementary: "Rus - Boshlang'ich",
    // Projects
    ecommerce_title: "E-Commerce",
    ecommerce_desc: "E-commerce onlayn xarid qilish loyihasi",
    crud_title: "CRUD",
    crud_desc:
      "Backend'dan ma'lumotlarni oladi. Messages sahifasidagi formani to'ldirib, ma'lumotlaringiz Telegram botga yuboriladi.",
    haitov_title: "Haitov.uz",
    haitov_desc:
      "Backend ma'lumotlari kelmoqda. Kirish himoyalangan. Login: Username: a Password: a",
    crm_title: "Aqlli-maktab CRM",
    crm_desc:
      "React.js, Ant.design, Axios, Redux-toolkit. Platforma uchun sahifalar, komponentlar va interfeys yaratdim.",
    // Education
    najot_talim: "Najot ta'lim",
    course_react: "Kurs: React.js",
    tashkent_uz: "Toshkent, O'zbekiston",
    tashkent_university: "Toshkent Axborot Texnologiyalari Universiteti",
    karshi_construction: "Qarshi Qurilish Kolleji",
    // Experience
    it_klaster: "IT Klaster academy",
    frontend_mentor: "Frontend mentor va dasturchi",
    cout_company: "Cout company",
    frontend_developer: "Frontend dasturchi",
    // Soft Skills
    honesty: "Halollik",
    teamwork: "Jamoada Ishlash",
    proactive: "O'rganish va Savollar Berishda Faol",
    sociable: "Muloqotchan",
    dont_give_up: "Taslim Bo'lmaslik",
  },
  en: {
    portfolio: "Portfolio",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    education: "Education",
    experience: "Experience",
    download_resume: "Download Resume",
    hero_name: "Javokhir Jumayev",
    hero_title: "Frontend Developer",
    hero_description:
      "Frontend developer with hands-on experience in React.js and modern UI libraries. Passionate about building user-friendly applications and continuously learning new technologies.",
    view_projects: "View Projects",
    contact_me: "Contact Me",
    about_title: "About Me",
    about_description:
      "Frontend developer with hands-on experience in React.js and modern UI libraries. Passionate about building user-friendly applications and continuously learning new technologies.",
    clean_code: "Clean Code",
    clean_code_desc: "I focus on writing clean and efficient code",
    modern_design: "Modern Design",
    modern_design_desc: "I create modern and beautiful interfaces",
    fast_performance: "Fast Performance",
    fast_performance_desc: "I achieve high performance",
    skills_title: "Technical Skills",
    skills_description: "Technologies and tools I work with",
    frontend: "Frontend",
    backend: "Backend Integration",
    tools: "Tools",
    projects_title: "Projects",
    projects_description: "Some of the projects I've worked on",
    demo: "Demo",
    code: "Code",
    contact_title: "Contact",
    contact_description: "I'd be happy to discuss your project",
    email: "Email",
    phone: "Phone",
    address: "Address",
    location: "Karshi, Uzbekistan",
    social_media: "On social media",
    footer_rights: "All rights reserved.",
    footer_built: "Built with React and Tailwind CSS",
    education_title: "Education",
    soft_skills: "Soft Skills",
    languages: "Languages",
    uzbek_native: "Uzbek - Native",
    english_elementary: "English - Elementary",
    russian_elementary: "Russian - Elementary",
    // Projects
    ecommerce_title: "E-Commerce",
    ecommerce_desc: "E-commerce online shopping project",
    crud_title: "CRUD",
    crud_desc:
      "It fetches data from the backend. By filling out the form on the Messages page, your data will be sent to the Telegram bot.",
    haitov_title: "Haitov.uz",
    haitov_desc:
      "Backend data is coming. Access is secured with authorized. Login password: Username: a Password: a can be accessed.",
    crm_title: "Aqlli-maktab CRM",
    crm_desc:
      "React.js, Ant.design, Axios, Redux-toolkit. Developed pages, components, and user interface for the platform.",
    // Education
    najot_talim: "Najot ta'lim",
    course_react: "Course: React.js",
    tashkent_uz: "Tashkent, Uzbekistan",
    tashkent_university: "Tashkent University of Information Technologies",
    karshi_construction: "Karshi Construction College",
    // Experience
    it_klaster: "IT Klaster academy",
    frontend_mentor: "Frontend mentor and developer",
    cout_company: "Cout company",
    frontend_developer: "Frontend developer",
    // Soft Skills
    honesty: "Honesty",
    teamwork: "Teamwork",
    proactive: "Proactive in Learning and Asking Questions",
    sociable: "Sociable",
    dont_give_up: "Don't give up",
  },
  ru: {
    portfolio: "Портфолио",
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
    education: "Образование",
    experience: "Опыт",
    download_resume: "Скачать Резюме",
    hero_name: "Джавохир Джумаев",
    hero_title: "Frontend Разработчик",
    hero_description:
      "Frontend разработчик с практическим опытом работы с React.js и современными UI библиотеками. Увлечён созданием удобных приложений и постоянным изучением новых технологий.",
    view_projects: "Смотреть Проекты",
    contact_me: "Связаться",
    about_title: "Обо мне",
    about_description:
      "Frontend разработчик с практическим опытом работы с React.js и современными UI библиотеками. Увлечён созданием удобных приложений и постоянным изучением новых технологий.",
    clean_code: "Чистый Код",
    clean_code_desc: "Я уделяю внимание написанию чистого и эффективного кода",
    modern_design: "Современный Дизайн",
    modern_design_desc: "Я создаю современные и красивые интерфейсы",
    fast_performance: "Быстрая Работа",
    fast_performance_desc: "Я достигаю высокой производительности",
    skills_title: "Технические Навыки",
    skills_description: "Технологии и инструменты, с которыми я работаю",
    frontend: "Frontend",
    backend: "Работа с Backend",
    tools: "Инструменты",
    projects_title: "Проекты",
    projects_description: "Некоторые проекты, над которыми я работал",
    demo: "Демо",
    code: "Код",
    contact_title: "Контакты",
    contact_description: "Буду рад обсудить ваш проект",
    email: "Email",
    phone: "Телефон",
    address: "Адрес",
    location: "Карши, Узбекистан",
    social_media: "В социальных сетях",
    footer_rights: "Все права защищены.",
    footer_built: "Создано с React и Tailwind CSS",
    education_title: "Образование",
    soft_skills: "Личные Навыки",
    languages: "Языки",
    uzbek_native: "Узбекский - Родной",
    english_elementary: "Английский - Начальный",
    russian_elementary: "Русский - Начальный",
    // Projects
    ecommerce_title: "E-Commerce",
    ecommerce_desc: "Проект интернет-магазина",
    crud_title: "CRUD",
    crud_desc:
      "Получает данные с бэкенда. Заполнив форму на странице Messages, ваши данные будут отправлены в Telegram бот.",
    haitov_title: "Haitov.uz",
    haitov_desc:
      "Данные с бэкенда поступают. Доступ защищён. Логин: Username: a Password: a",
    crm_title: "Aqlli-maktab CRM",
    crm_desc:
      "React.js, Ant.design, Axios, Redux-toolkit. Разработал страницы, компоненты и интерфейс для платформы.",
    // Education
    najot_talim: "Najot ta'lim",
    course_react: "Курс: React.js",
    tashkent_uz: "Ташкент, Узбекистан",
    tashkent_university: "Ташкентский университет информационных технологий",
    karshi_construction: "Каршинский строительный колледж",
    // Experience
    it_klaster: "IT Klaster academy",
    frontend_mentor: "Frontend ментор и разработчик",
    cout_company: "Cout company",
    frontend_developer: "Frontend разработчик",
    // Soft Skills
    honesty: "Честность",
    teamwork: "Командная работа",
    proactive: "Активность в обучении и вопросах",
    sociable: "Общительность",
    dont_give_up: "Не сдаваться",
  },
};

export function ThemeLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("uz");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedLanguage) setLanguageState(savedLanguage);
    if (savedTheme) {
      setThemeState(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.uz] || key;
  };

  return (
    <ThemeLanguageContext.Provider
      value={{ language, setLanguage, theme, setTheme, t }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error(
      "useThemeLanguage must be used within ThemeLanguageProvider"
    );
  }
  return context;
}
