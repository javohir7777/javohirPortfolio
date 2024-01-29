import Capture from "../assets/Capture.png";
import YouTube from "../assets/YouTube.png";
import Weather from "../assets/Weather.png";
import Energiyat from "../assets/Energiyat.png";
import JsonPlace from "../assets/JsonPlace.png";
import Counter from "../assets/Counter.png";
import Product from "../assets/Product.png";
import Projects from "../assets/Projects.png";
import Api from "../assets/Api.png";

export const ProjectList = [
  {
    name: "Online Shopping",
    image: Capture,
    skills: ["Html", "Css", "JavaScript"],
    link: "https://joxashopping.netlify.app",
    github: "github.com/javohir7777/online_shopping",
    domen: "joxashopping.netlify.app",
    description: "Online shopping veorstka",
  },
  {
    name: "YouTube",
    image: YouTube,
    skills: ["React.js", "Scss", "Bootstrap"],
    link: "https://you-tube-inky.vercel.app/",
    github: "github.com/javohir7777/youTube/tree/main",
    domen: "you-tube-inky.vercel.app",
    description: "YouTube clone",
  },
  {
    name: "Physics teacher",
    image: Energiyat,
    skills: ["ReactJS", "CSS", "Ant Design"],
    link: "https://javohirtecher1.netlify.app/",
    github: "github.com/javohir7777/Teacher1",
    domen: "javohirtecher1.netlify.app",
    description: "Api is used. All data comes from the backend.",
  },
  {
    name: "Weather today",
    image: Weather,
    skills: ["ReactJS", "CSS", "Bootstrap"],
    link: "https://weather-seven-chi.vercel.app/",
    github: "github.com/javohir7777/weather",
    domen: "weather-seven-chi.vercel.app",
    description: `1) You can find out what the weather is like. 
    2) You can find out what the weather is like in other countries through search.`,
  },
  {
    name: "Json place holder",
    image: JsonPlace,
    skills: ["Html", "CSS", "Bootstrap", "JavaScript"],
    link: "https://jsonplase.netlify.app",
    github: "github.com/javohir7777/jsApi",
    domen: "jsonplase.netlify.app",
    description: `1) jsonplaceholder api used. 
    2) Whichever button you press, it will output information related to that button.`,
  },
  {
    name: "Counters",
    image: Counter,
    skills: ["Html", "Scss", "Bootstrap", "JavaScript"],
    link: "https://counteries.netlify.app",
    github: "github.com/javohir7777/countries",
    domen: "counteries.netlify.app",
    description: `1) All country data comes from api. 
    2) It is possible to do day - night. 
    3) There are facilities such as the name of the country, the number of inhabitants, the continent where it is located, the capital. `,
  },

  {
    name: "Product",
    image: Product,
    skills: ["React.js", "Scss", "Bootstrap"],
    link: "https://javohir-products.netlify.app",
    github: "github.com/javohir7777/lessonReact-6",
    domen: "javohir-products.netlify.app",
    description: `1) Login password:  UserName: javohir, password: 777. 
    2) Enter information by filling out the form. 
    3) Delete by pressing Delete. 
    4) It is searched through Search. 
    5) Average prices are determined. `,
  },
  {
    name: "Projects",
    image: Projects,
    skills: ["React.js", "Scss", "Bootstrap"],
    link: "https://my-projects-zeta-sable.vercel.app",
    github: "github.com/javohir7777/myProjects",
    domen: "my-projects-zeta-sable.vercel.app",
  },
  {
    name: "Products Api",
    image: Api,
    skills: ["Next.js", "Scss", "Bootstrap", "Ant Design"],
    link: "https://next-js-project-lovat-ten.vercel.app",
    github: "github.com/javohir7777/nextJsProject/tree/main",
    domen: "next-js-project-lovat-ten.vercel.app",
    //   description: `1) The site is made in Next.js, the data comes from the backend.
    //   2) You can find out the newly released product, you can find out the product name, prices, picture, weight.
    //   3) By clicking on the name of the product in the category of products, all the products belonging to that product will be displayed.
    //   4) In the Product section, you can choose the product you need.`,
    description: "",
  },
];
