import { BiLogoTypescript } from "react-icons/bi";
import {
  FaMicrochip,
  FaPython,
  FaLinux,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";

// export const skills = [
//   {
//     id: 1,
//     title: 'Html',
//     percentage: '25',
//   },
// ];

export const mySkills = [
  {
    id: 10,
    href: "/certs/bare-metal-stm32.pdf",
    icon: <FaMicrochip />,
    title: "Microcontroller",
  },

  // {
  //   id: 9,
  //   href: "/certs/Cplusplus.pdf",
  //   icon: <FaMicrochip />,
  //   title: "Microcontroller",
  // },
  {
    id: 8,
    href: "/certs/python3-intermediate.pdf",
    icon: <FaPython />,
    title: "Python",
  },

  {
    id: 7,
    href: "/certs/C.pdf",
    // icon: <FaC />,
    icon: <img src="./Cplus.png" alt="C++" />,
    title: "C++",
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
