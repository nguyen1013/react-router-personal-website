import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  // FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaReact,
  // FaCss3Alt,
  FaPython,
  FaJava,
  FaLinux,
  FaMicrochip,
} from "react-icons/fa";

import { FaSquareJs, FaC } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";


import { FiFileText, FiExternalLink } from "react-icons/fi"; // FiUser,

import Work1 from "./assets/portfolio-1.jpg";
import Work2 from "./assets/portfolio-2.jpg";
import Work3 from "./assets/portfolio-3.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 4,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 3,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 2,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 1,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name: ",
    description: "Nguyen",
  },

  {
    id: 2,
    title: "Last Name: ",
    description: "Nguyen Anh Song",
  },

  // {
  //   id: 3,
  //   title: 'Age : ',
  //   description: 'xx Years',
  // },

  // {
  //   id: 4,
  //   title: 'Nationality : ',
  //   description: 'Finland',
  // },

  {
    id: 5,
    title: "Freelance: ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address: ",
    description: "Vaasa, Finland",
  },

  {
    id: 7,
    title: "Phone: ",
    description: "+358417213228",
  },

  {
    id: 8,
    title: "Email: ",
    description: "nasongnguyen@gmail.com",
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'nasongnguyen',
  // },

  {
    id: 10,
    title: "Langages: ",
    description: "English",
  },
];

export const resume = [
  // {
  //   id: 5,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2024 - PRESENT',
  //   title: 'Web Developer <span> Vaasa </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  // },

  {
    id: 4,
    category: "education",
    icon: <FaCertificate />,
    year: "2024",
    title: "Microsoft Certified: Azure Fundamentals <span> AZ-900 </span>",
    href: "/certs/AZ-900.pdf",
    desc: "Cloud concepts, core Azure services, plus Azure management and governance features and tools",
  },

  {
    id: 3,
    category: "education",
    icon: <FaCertificate />,
    year: "2024",
    title: "Front-end Engineer <span> Codecademy </span>",
    href: "/certs/front-end.pdf",
    desc: "HTML, CSS, Javascript, Git & GitHub, Web Design, React, Redux, Build Tools, Data Structures, Algorithms.",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023 - now",
    href: "https://www.vamk.fi/en",
    title: "Vaasa University of Applied Sciences <span> VAMK </span>",
    desc: "Bachelor of Engineering - Information Technology.",
  },

  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023 - now",
    title: "Codecademy",
    href: "https://www.codecademy.com/",
    desc: "Online learning platform for programming languages.",
  },

  // {
  //   id: 6,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2009',
  //   title: 'Bachelor Degree <span>  High School </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  // },
];

// export const skills = [
//   {
//     id: 1,
//     title: 'Html',
//     percentage: '25',
//   },
// ];

export const mySkills = [
  {
    id: 9,
    href: "/certs/bare-metal-stm32.pdf",
    icon: <FaMicrochip />,
    title: "Microcontroller",
  },

  {
    id: 8,
    href: "/certs/python3-intermediate.pdf",
    icon: <FaPython />,
    title: "Python",
  },

  {
    id: 7,
    href: "/certs/C.pdf",
    icon: <FaC />,
    title: "C,  C++",
  },

  {
    id: 6,
    href: "/certs/linux-combine.pdf",
    icon: <FaLinux />,
    title: "Linux",
  },

  // {
  //   id: 5,
  //   href: "/certs/CSS.pdf",
  //   icon: <FaCss3Alt />,
  //   title: "CSS",
  // },

  {
    id: 4,
    href: "/certs/java-intermediate.pdf",
    icon: <FaJava />,
    title: "Java",
  },

  {
    id: 3,
    href: "/certs/front-end.pdf",
    icon: <FaSquareJs />,
    title: "Javascript",
  },

  {
    id: 2,
    href: "/certs/typescript.pdf",
    icon: <BiLogoTypescript />,
    title: "TypeScript",
  },

  {
    id: 1,
    href: "/certs/React.pdf",
    icon: <FaReact />,
    title: "React",
  },
];

export const portfolio = [
  {
    id: 3,
    img: Work1,
    title: "Web development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "mini-Reddit Web Application",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Javascript, React, Redux with Reddit API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://reddit-minimal-e2301514.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Web development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Weather Forecast Web Application",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, Javascript, CSS with OpenWeather API and Google Places API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://www.cc.puv.fi/~e2301514/my-projects/weather-forecast%20(google-api)/",
      },
    ],
  },

  {
    id: 1,
    img: Work3,
    title: "Brain Game",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Memory Game",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, Javascript, CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://www.cc.puv.fi/~e2301514/my-projects/memory-game-rev2",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(214, 100%, 40%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
